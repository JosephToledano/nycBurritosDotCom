const express = require("express");

const yelpDataController = require("../controllers/yelpDataController");

const router = express.Router();

router.get("/", yelpDataController.getReviews, (req, res) =>
  res.status(200).json(res.locals)
);

module.exports = router;
