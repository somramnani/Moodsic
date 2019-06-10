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
//________________________________________________________

//________________________________________________________
//LOGIN PAGE
//________________________________________________________

// Add login event
loginBtn.on("click", function () {
  var email = $("#email_field").val();
  var password = $("#password_field").val();
  $("#login_div").removeClass("delay-3s");

  //Sign in
  $("#login_div").addClass("fadeOut");
  $("#login_div").addClass("displaynone");
  $("#login_div").removeClass("fadeIn");
  $("#body_div").removeClass("displaynone");
  $("#body_div").addClass("fadeIn");

  alert("Welcome " + req.body.fristname);

});

// Continue as guest
$("#guest_button").on("click", function () {
  auth.signInAnonymously()
  $("#login_div").removeClass("delay-3s");
});
//________________________________________________________

//________________________________________________________
//SIGN UP PAGE
//________________________________________________________
signUpLink.on("click", function () {
  event.preventDefault();
  $("#signup_div").addClass("fadeIn");
  $("#signup_div").show();
  $("#login_div").removeClass("delay-3s");
  $("#signup_div").removeClass("displaynone");

});

// Add a sign up Event
signUpBtn.on("click", function () {

  $("#signup_div").removeClass("fadeIn");
  $("#signup_div").addClass("fadeOut");
  $("#signup_div").addClass("displaynone");
  alert("signed")
});
//________________________________________________________

// Add a logout function
logOutBtn.on("click", function () {
  $("#login_div").removeClass("fadeIn");
  $("#login_div").removeClass("delay-3s");
  $("#login_div").removeClass("fadeOut");
  $("#login_div").removeClass("displaynone");
  $("#login_div").addClass("fadeIn");
  
  $("#body_div").addClass("displaynone");

});


//When User is signed out
$("#login_div").removeClass("fadeOut");
$("#login_div").addClass("fadeIn");
$("#body_div").addClass("displaynone");