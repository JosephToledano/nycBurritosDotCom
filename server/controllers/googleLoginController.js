const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const { clientID, clientSecret } = require("../settings");
const db = require("../db/burritoBlogModels");
const { clientID, clientSecret } = require("../../settings.js");


const googleController = {};

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// passport.authenticate("google", { scope: ["profile", "email"] });
// (req, res, next)

passport.use(
  new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "http://localhost:3001/google/callback",
    },

    function (accessToken, refreshToken, profile, done) {
      //check if the user exists, and add to db if not

      // let user;
      // const sql = {
      //   text: "select * from users WHERE username = $1",
      //   values: [profile.username],
      // };

      // db.query(sql, (error, response) => {
      //   if (error) {
      //     console.log(error);
      //   }
      //   console.log("this is the response", response);
      //   if (response.rows[0].username.length > 0) {
      //     user = response.rows[0];
      //   }
      // });

      return done(null, profile);
    }
  )
);

module.exports = googleController;
