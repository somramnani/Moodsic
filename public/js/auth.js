/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

//________________________________________________________
//FIREBASE
//________________________________________________________
  var firebaseConfig = {
    apiKey: "AIzaSyBnyOQkasRUlKo6Aay1tAswnw0Ij-e5mPE",
    authDomain: "moodsic-ad584.firebaseapp.com",
    databaseURL: "https://moodsic-ad584.firebaseio.com",
    projectId: "moodsic-ad584",
    storageBucket: "moodsic-ad584.appspot.com",
    messagingSenderId: "376593131880",
    appId: "1:376593131880:web:36cf307a01fabd37"
  };

  firebase.initializeApp(firebaseConfig);
  console.log("FIREBASE: ", firebase);
//________________________________________________________

//________________________________________________________
// GLOBAL VARIABLES
//________________________________________________________
  var loginBtn = $("#login");
  var signUpLink = $("#signupButton");
  var signUpBtn = $("#signup");
  var logOutBtn = $("#logout");
  var auth = firebase.auth();
  $("#signup_div").hide();
  $("#body_div").hide();

//________________________________________________________

//________________________________________________________
//LOGIN PAGE
//________________________________________________________

  // Add login event
  loginBtn.on("click", function() {
    var email = $("#email_field").val();
    var password = $("#password_field").val();

    //Sign in
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
  });
//________________________________________________________

//________________________________________________________
//SIGN UP PAGE
//________________________________________________________
  signUpLink.on("click", function() {
    $("#signup_div").addClass("fadeIn");
    $("#signup_div").show();
  });

  // Add a sign up Event
  signUpBtn.on("click", function() {
    var email = $("#email").val();
    var password = $("#password").val();

    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
      console.log(email);
     
     

    });
    $("#signup_div").removeClass("fadeIn");
    $("#signup_div").addClass("fadeOut");
  });
//________________________________________________________

// Add a logout function
logOutBtn.on("click", function() {
  var auth = firebase.auth();
  auth.signOut();
  $("#login_div").removeClass("fadeIn");
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
    console.log("Signed in");
  
    $("#login_div").addClass("fadeOut");
    $("#login_div").removeClass("fadeIn");
    $("#body_div").show();


    // ...
  } else {
    // User is signed out.
    console.log("Not signed in");
   
    $("#login_div").removeClass("fadeOut");
    $("#login_div").addClass("fadeIn");
    $("#body_div").hide();
    // ...
  }
});
