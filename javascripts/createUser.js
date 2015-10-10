define(function(require) {

	var $ = require('jquery');

	// console.log('module check');

 	return {
	 	
	 	createMember: function(memberData) {
	 		console.log('memberData', memberData);
	    $.ajax({
	      url: "https://forest-fires.firebaseio.com/newMember.json",
	      method: "POST",
	      data: JSON.stringify(memberData)
	      }).done(function(memberData) {
	      console.log('Go start a fire!');
	      })

	    } // end xhr request
		
	}; // end return statement


})