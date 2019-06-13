//we import passport packages required for authentication
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;

//We will need the models folder to check passport agains
const db = require("../models");
//
// Telling passport we want to use a Local Strategy. In other words,
//we want login with a username/email and password
passport.use(new SpotifyStrategy({
    clientID: '4562bd2994224fa4bf912981be4699d1',
    clientSecret: 'ff3b03831bf84774afbb85bd8cc72dea',
    callbackURL: 'http://moodsic-bc.herokuapp.com/auth/spotify/callback'
  },
  (accessToken, refreshToken, expires_in, profile, done) => {
    process.nextTick(() => {
      console.log('you are logged into spotify as ' + profile.username);
      console.log(accessToken)
      return done(null, profile);
    })
    passport.serializeUser((user, cb) => {
      cb(null, user);
    });
    //
    passport.deserializeUser((obj, cb) => {
      cb(null, obj);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((profile, cb) => {
  cb(null, profile);
});
//
passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});
// // Exporting our configured passport
module.exports = passport;