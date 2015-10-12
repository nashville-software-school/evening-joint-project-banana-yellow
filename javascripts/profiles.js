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
        defered.resolve(profiles);
        console.log("Ajax Profiles = ", profiles);
      })// End of ajax call
        .fail(function(xhr, status, error) {
          deffered.reject(error);
        });
        console.log("Ajax Profiles Promise", defered.promise);
        return defered.promise;
    }// End of loadProfiles function
  }; // End of return
}); //

