const express = require("express");
const router = express.Router();
const passport = require("passport");
const cookieSession = require("cookie-session");

require("../controllers/googleLoginController");

router.use(
  cookieSession({
    name: "nycBurritos",
    keys: ["key1", "key2"],
  })
);

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

router.use(passport.initialize());
router.use(passport.session());

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile"] }),
  (req, res) => {
    return res.status(200).json({ msg: "working" });
  }
);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    //Successful auth, redirect home

    res.redirect("/");
  }
);
//logging out with google
router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

router.get("/failed", (req, res) => res.send("You failed to login!"));
router.get("/good", isLoggedIn, (req, res) => {
  // res.redirect("/");
  // console.log("THIS IS REQ . USER!!!", req.user);
  // res.status(200).send(req.user.displayName);
});

module.exports = router;
