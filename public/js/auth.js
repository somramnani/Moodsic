//________________________________________________________
// GLOBAL VARIABLES
//________________________________________________________
var loginBtn = $("#login");
var signUpLink = $("#signupButton");
var signUpBtn = $("#signup");
var logOutBtn = $("#logout");
//When User is signed out
$("#login_div").removeClass("fadeOut");
$("#login_div").addClass("fadeIn");
$("#body_div").addClass("displaynone");
$("#signup_div").hide();
//________________________________________________________

//________________________________________________________
//LOGIN PAGE
//________________________________________________________

// Add login event
loginBtn.on("click", function () {
  //Hides the login form and fades out
  $("#login_div").addClass("fadeOut displaynone");
  $("#login_div").removeClass(" delay-3s fadeIn");

  // Shows the main body and fades in
  $("#body_div").removeClass("displaynone");
  $("#body_div").addClass("fadeIn");

  // Displays the account logo and fades in
  $("#account-icon-li").removeClass("displaynone");
  $("#account-icon-li").addClass("fadeIn");
 
  // Displays the logout and fades in
  $("#logout-li").removeClass("displaynone");
  $("#logout-li").addClass("fadeIn");
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
  $("#login_div").removeClass("delay-3s fadeIn displaynone");
});

// Add a sign up Event
signUpBtn.on("click", function () {
  $("#signup_div").removeClass("fadeIn");
  $("#signup_div").addClass("displaynone");

  $("#login_div").addClass("fadeIn");
  alert("signed up")
});
//________________________________________________________

// Add a logout function
logOutBtn.on("click", function () {
  $("#login_div").removeClass("fadeIn delay-3s fadeOut displaynone");
  $("#login_div").addClass("fadeIn");
  $("#body_div").addClass("displaynone");

   // Displays the account logo and fades in
   $("#account-icon-li").addClass("displaynone");
   $("#account-icon-li").removeClass("fadeIn");
  
   // Displays the logout and fades in
   $("#logout-li").addClass("displaynone");
   $("#logout-li").removeClass("fadeIn");
});