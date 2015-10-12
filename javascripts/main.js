requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});



require(["jquery", "createUser"], function($, createUser) {

  $("#signupButton").click(function(e) {

    // e.preventDefault();

    console.log('Signup button clicked');

    var newMember = {
      "firstName": $("#firstName").val(),
      "lastName": $("#lastName").val(),
      "imgSrc": $("#imgSrc").val(),
      "interests": $("#interests").val(),
      "lookingFor": $("#lookingFor").val(),
      "park": $("#park").val(),
      "username": $("#username").val(),
      "password": $("#password").val()
    };

        
    console.log('newMember', newMember);
    
    createUser.createMember(newMember);
      
  }) // end click event handler

})

require(["jquery", "profiles", "q", "hbs!../templates/memberProfiles"], function($, profiles, q, memTempl) {

  var newMembers;

  profiles.loadProfiles()
    .then(function(profileData) {
      console.log('profileData', profileData);
      newMembers = profileData;
      console.log('newMembers', newMembers);
    $('#profileDisplay').append(memTempl({newMembers: newMembers})); 
    })
    
})




