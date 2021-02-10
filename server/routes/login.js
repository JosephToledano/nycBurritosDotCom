const express = require("express");

const loginController = require("../controllers/loginController");
const cookieController = require("../controllers/cookieController");

const router = express.Router();

// router.get('/', signUpController, (req, res) => res.json(res.locals))

router.post(
  "/",
  loginController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => res.send(res.locals)
);

module.exports = router;
