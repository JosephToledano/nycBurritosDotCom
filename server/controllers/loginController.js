const db = require("../db/burritoBlogModels.js");
const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const cors = require("cors");
const app = express();

const loginController = {};

passport.serializeUser((user, done) => {
  console.log("bye");

  done(null, user.user_id);
});

passport.deserializeUser(function (id, done) {
  console.log("bye");
  const sql = {
    text: "select * from users WHERE user_id = $1",
    values: [id],
  };

  db.query(sql, (error, response) => {
    if (error) {
      console.log(error);
      done(null, false);
    }
    user.username = response.rows[0].username;
    user.password = response.rows[0].password;
    user.user_id = response.rows[0]._id;
    done(null, user);
  });
});

app.use(
  session({
    secret: "burritos",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

loginController.info;

passport.use(
  new LocalStrategy(function (username, password, done) {
    // (req, res, next) => {
    const sql = {
      text: "select * from users WHERE username = $1 AND password = $2",
      values: [username, password],
    };

    db.query(
      sql,
      (error, response) => {
        if (error) {
          console.log(error);
          return done(error);
          return next(error);
        }
        const user = {};
        if (response.rows.length && response.rows[0].username.length > 0) {
          // res.locals.user_id = response.rows[0]._id;
          // res.locals.status = "Go ahead";
          // res.locals.username = response.rows[0].username;
          // res.locals.password = response.rows[0].password;
          user.username = response.rows[0].username;
          user.password = response.rows[0].password;
          user.status = "Go ahead";
          user.user_id = response.rows[0]._id;
        }
        loginController.info = user;
        return done(null, user);
        // return next();
      }

      // return next(error);
    );
  })
);

//Create
loginController.verifyUser = (req, res, next) => {
  const sql = {
    text: "select * from users WHERE username = $1 AND password = $2",
    values: [req.body.username, req.body.password],
  };

  db.query(sql, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    console.log("this is the response", response);
    if (response.rows.length && response.rows[0].username.length > 0) {
      res.locals.user_id = response.rows[0]._id;
      res.locals.status = "Go ahead";
      res.locals.username = response.rows[0].username;
      res.locals.password = response.rows[0].password;
      return next();
    }
    return next(error);
  });
};

module.exports = loginController;
