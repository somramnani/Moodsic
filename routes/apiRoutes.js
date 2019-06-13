// const db = require("../models");
const passport = require("../config/passport");

module.exports = (app) => {

  app.get(
    '/auth/spotify',
    passport.authenticate('spotify', {
      scope: ['user-read-email', 'user-read-private', 'playlist-modify-public', 'user-read-currently-playing', 'user-read-playback-state', 'streaming', '' ],
      showDialog: true
    }),
    function(req, res) {
      // The request will be redirected to spotify for authentication, so this
      // function will not be called.
    }
  );

  app.get(
    '/callback',
    passport.authenticate('spotify', { failureRedirect: '/api/login' }),
    function(req, res) {
      res.redirect('/');
    }
  );

  app.get(
    '/auth/spotify/callback/',
    passport.authenticate('spotify', { failureRedirect: '/api/login' }),
    function(req, res) {
      res.redirect('/app');
    }
  );

  // Log out
  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log("Logged Out")

  });

};