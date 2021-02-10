const express = require("express");

const signUpController = require("../controllers/signUpController");
const cookieController = require("../controllers/cookieController");

const router = express.Router();

// router.get('/', signUpController, (req, res) => res.json(res.locals))

router.post(
  "/",
  signUpController.addUser,
  cookieController.setSSIDCookie,
  (req, res) => res.json(res.locals)
);

module.exports = router;
