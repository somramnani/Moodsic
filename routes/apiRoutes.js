const db = require("../models");
const passport = require("../config/passport");
const accessToken = "BQChnGIvz4V0Cxzrex0g_PGtcnZNQuXZDkjc4DCmz0Sm1_j3oHlmsBnk0Dy3AocDtfLnrOWCKbF3KwD6iMDq_kV-arVVeViG3KIiblr-t_fgBht4xI4y5ZKHsmJt3y6e5q764sPTWcFgm-OZZJwb_ggUjbwvCa6nKI-RClPXAJzUJZ1eKWZY9auib2H1Zyfc2qDs5nklE5gnp0mlpYc3A90hlKRGGA"

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
      res.redirect('/accounts');
    }
  );

  // Log out
  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log("Logged Out")

  });

};