const db = require("../models");
const passport = require("../config/passport");
var my_client_id = '4562bd2994224fa4bf912981be4699d1';

module.exports = (app) => {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
   console.log("Signed in as " + req.user.email)

  });

  //Sign up route - creates a user in the DB via sequelize then redirects you to the login page.
  app.post("/api/signup", (req, res) => {
    db.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    }).then(() => {

    }).catch((err) => {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });
  // Log out
  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log("Logged Out")
    

  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};