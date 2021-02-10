const db = require("../db/burritoBlogModels.js");

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  try {
    res.cookie("secret", Math.random() * 99, { httpOnly: true });
    return next();
  } catch (e) {
    console.log(e);
  }
};

cookieController.setSSIDCookie = (req, res, next) => {
  try {
    res.cookie("ssid", res.locals.id, { httpOnly: true });
    return next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = cookieController;
