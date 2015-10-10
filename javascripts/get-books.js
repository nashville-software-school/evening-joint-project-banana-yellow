define(function(require) {
  var _ = require("lodash");

  return {
    load: function(fn) {
      // This XHR does belong here
      $.ajax("https://forest-fires.firebaseio.com//forest-fires.json").done(function(books) {
        fn(books);

      });

    }
  };
});
