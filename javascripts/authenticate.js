define(function('require') {
  var $ = require('jquery');
  var fb = require('firebase');

      // the main firebase reference
      var rootRef = new Firebase('https://forest-fires.firebaseio.com');

      // pair our routes to our form elements and controller
      var routeMap = {
          '#/': {
              form: 'frmLogin',
              controller: 'login'
          },
              '#/logout': {
              form: 'frmLogout',
              controller: 'logout'
          },
              '#/register': {
              form: 'frmRegister',
              controller: 'register'
          },
              '#/profile': {
              form: 'frmProfile',
              controller: 'profile',
              authRequired: true // must be logged in to get here
          },
      };

      // Handle Email/Password login
      // returns a promise
      function authWithPassword(userObj) {
          var deferred = $.Deferred();
          console.log(userObj);
          rootRef.authWithPassword(userObj, function onAuth(err, user) {
              if (err) {
                  deferred.reject(err);
              }

              if (user) {
                  deferred.resolve(user);
              }

          });

          return deferred.promise();
      }

      // create a user but not login
      // returns a promsie
      function createUser(userObj) {
          var deferred = $.Deferred();
          rootRef.createUser(userObj, function (err) {

              if (!err) {
                  deferred.resolve();
              } else {
                  deferred.reject(err);
              }

          });

          return deferred.promise();
      }

      // Create a user and then login in
      // returns a promise
      function createUserAndLogin(userObj) {
          return createUser(userObj)
              .then(function () {
              return authWithPassword(userObj);
          });
      }


      // route to the specified route if sucessful
      // if there is an error, show the alert
      function handleAuthResponse(promise, route) {
          $.when(promise)
              .then(function (authData) {

              // route
              routeTo(route);

          }, function (err) {
              console.log(err);
              // pop up error
              showAlert({
                  title: err.code,
                  detail: err.message,
                  className: 'alert-danger'
              });

          });
      }

})