const express = require("express");
const passport = require("passport");
const loginController = require("../controllers/loginController");
const cookieController = require("../controllers/cookieController");

const router = express.Router();

// router.get('/', signUpController, (req, res) => res.json(res.locals))

router.post(
  "/",
  passport.authenticate(
    "local"
    // successRedirect: "/",
    // failureRedirect: "/login",
  ),
  // loginController.verifyUser,
  // cookieController.setSSIDCookie,
  (req, res) => {
    res.locals = loginController.info;
    res.send(res.locals);
  }
);

// app.post("/login/", passport.authenticate('local'), (req, res) => {
//   console.log(req.user);
//   // make sure to respond to the request
//   res.send(req.user);
// })

module.exports = router;
