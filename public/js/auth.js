//FIREBASE
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
// GLOBAL VARIABLES
var loginBtn = $("#login");
var signUpLink = $("#signupButton");
var signUpBtn = $("#signup");
var logOutBtn = $("#logout");
var auth = firebase.auth();
$("#signup_div").hide();

//LOGIN PAGE
// Add login event
loginBtn.on("click", function () {
  var email = $("#email_field").val();
  var password = $("#password_field").val();
  $("#login_div").removeClass("delay-3s");
  //Sign in
  $("#login_div").addClass("fadeOut");
  $("#login_div").removeClass("fadeIn");
  $("#body_div").removeClass("displaynone");
  $("#body_div").addClass("fadeIn");
});
// Continue as guest
$("#guest_button").on("click", function () {
  auth.signInAnonymously()
  $("#login_div").removeClass("delay-3s");
});
//SIGN UP PAGE
signUpLink.on("click", function () {
  event.preventDefault();
  $("#signup_div").addClass("fadeIn");
  $("#signup_div").show();
  $("#login_div").removeClass("delay-3s");
});
// Add a sign up Event
signUpBtn.on("click", function () {

  $("#signup_div").removeClass("fadeIn");
  $("#signup_div").addClass("fadeOut");
  alert("signed")
});
// Add a logout function
logOutBtn.on("click", function () {
  $("#login_div").removeClass("fadeIn");
  $("#login_div").removeClass("delay-3s");
  $("#login_div").removeClass("fadeOut");
  $("#login_div").addClass("fadeIn");
  $("#body_div").addClass("displaynone");
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user);
    console.log("Signed in");
    $("#login_div").addClass("fadeOut");
    $("#login_div").removeClass("fadeIn");
    $("#body_div").removeClass("displaynone");
    $("#body_div").addClass("fadeIn");
  } else {}
});
//When User is signed out
$("#login_div").removeClass("fadeOut");
$("#login_div").addClass("fadeIn");
$("#body_div").addClass("displaynone");