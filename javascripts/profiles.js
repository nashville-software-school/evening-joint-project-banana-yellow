define(function(require) {
  // var _ = require("lodash");
  var $ = require("jquery");
  var q = require("q");

  return {
    loadProfiles: function () {
      var deferred = q.defer();
      $.ajax({
        url:"http://forest-fires.firebaseio.com/newMember.json"
      }).done(function(profiles) {
        deferred.resolve(profiles);
        console.log("Ajax Profiles = ", profiles);
      })// End of ajax call
        .fail(function(xhr, status, error) {
          deferred.reject(error);
        });
        console.log("Ajax Profiles Promise", deferred.promise);
        return deferred.promise;
    }// End of loadProfiles function
  }; // End of return
}); //

