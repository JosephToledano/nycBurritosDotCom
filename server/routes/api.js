const express = require("express");

const burritoBlogController = require("../controllers/burritoBlogController");

const router = express.Router();

router.get("/", burritoBlogController.getReviews, (req, res) =>
  res.status(200).json([...res.locals])
);

router.post("/addReview", burritoBlogController.addReviews, (req, res) =>
  res.status(200).json(res.locals)
);

router.put(
  "/updateReview/:id",
  burritoBlogController.updateReviews,
  (req, res) => res.status(200).send("updated successfully!")
);

router.delete(
  "/deleteReview/:id",
  burritoBlogController.deleteReviews,
  (req, res) => res.status(200).send("begone")
);

module.exports = router;
