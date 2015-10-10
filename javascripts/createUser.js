define(function(require) {

	var $ = require('jquery');

	// console.log('module check');

 	return {
	 	
	 	createMember: function(memberData) {

	    $.ajax({
	      url: "https://forest-fires.firebaseio.com/forest-fires.json",
	      method: "POST",
	      data: JSON.stringify(memberData)
	      }).done(function(memberData) {
	      console.log('Go start a fire!');
	      })

	    } // end xhr request
		
	}; // end return statement


})