var firebaseConfig = {
  apiKey: "AIzaSyClKRbECK6qI-r0eg6SlI0Jjzm4b8wvR0k",
  authDomain: "loginpageproject-8a668.firebaseapp.com",
  databaseURL: "https://loginpageproject-8a668.firebaseio.com",
  projectId: "loginpageproject-8a668",
  storageBucket: "loginpageproject-8a668.appspot.com",
  messagingSenderId: "124559163013",
  appId: "1:124559163013:web:0d24aab2b0f18e50"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //User is logged in
    $("#user_div").addClass("displaynone")
    $("#login_div").removeClass("displaynone");
  } else {
    // User is not logged in
    $("#login_div").addClass("displaynone");
  }
});

// function login() {
//   var userEmail = $("#email_field").val();
//   var userPass = $("#password_field").val();

// }
