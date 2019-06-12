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

  app.get("/accounts", ensureAuthenticated, function(req, res) {
    res.render('testpage', {
      msg: "hi there",
      profile: req.user.username,
     });
     console.log(req.user._json.href)
  })

  // My Account Page
  app.get("/account", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/account.html"));
  });

  // Log out route
  app.get("/logout", (req, res) => {
    req.logout();
    console.log('logged out');
    res.redirect('/');
  });
  
  };

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });