const db = require("../models");
const passport = require("../config/passport");

module.exports = (app) => {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json("/members");
  });
  //sign up route - creates a user in the DB via sequelize then redirects you to the login page.
  app.post("/api/signup", (req, res) => {

    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(() => {
      res.redirect(307, "/api/login");
    }).catch((err) => {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

// Log out
  app.get("/logout", (req, res) => { 
    req.logout();
    res.redirect("/");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
