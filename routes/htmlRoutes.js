var db = require("../models");
var passport = require('passport');

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

  app.get('https://api.spotify.com/v1/users/tonyguy66/playlists', function(req, res) {

  })

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