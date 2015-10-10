requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});



require(["jquery", "createUser"], function($, createUser) {

  $("#signupButton").click(function(e) {

    console.log('Signup button clicked');

    var newMember = {
      "firstName": $("#firstName").val(),
      "lastName": $("#lastName").val(),
      // "id": $("#id").val(), 
      "interests": $("#interests").val(),
      "lookingFor": $("#lookingFor").val(),
      "park": $("#park").val(),
      "username": $("#username").val(),
      "password": $("#password").val()
    };
        
    console.log('newMember', newMember);
    
    createUser.createMember(newMember);
      
  }) // end click event handler



});

