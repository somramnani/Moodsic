// var db = require("../models");
var passport = require('passport');
var path = require("path");
var app = require("../server");
module.exports = function (app) {

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }

  app.get("/", function(req, res) { 
    res.render('index');
  })

  app.get("/app", ensureAuthenticated, function(req, res) {
    res.render('app', {
      msg: "hi there",
      profile: req.user.username,
     });
     console.log(req.user._json.href)
  })

  // My Account Page
  app.get("/account", (req, res) => {
    // res.sendFile(path.join(__dirname, "../views/testpage.handlebars"));
    res.render('testpage')
  });

   // My Account Page
   app.get("/app", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/app.html"));
  });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
      res.render("404");
    });
  

  // Log out route
  app.get("/logout", (req, res) => {
    req.logout();
    console.log('logged out');
    res.redirect('/');
  });

 // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};


