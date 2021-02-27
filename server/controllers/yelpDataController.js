const db = require("../db/burritoBlogModels.js");

const yelpDataController = {};

yelpDataController.getReviews = (req, res, next) => {
  "use strict";

  const yelp = require("yelp-fusion");
  const client = yelp.client(
    "0nguY6g4ca_BorOfDlpJkb1NewDimVd6vCySnsmVUXlbakZUv2NHrIOPdOcM9gfJL86BChy4jyZ2OEmQDDxcv-en2qwUw2aJx2XmibM-oqPCl9lXGgnOXdVWOrT5X3Yx"
  );

  client
    .search({
      term: "Downtown bakery",
      location: "manhattan, ny",
    })
    .then((response) => {
      console.log("this is the response body", response.jsonBody.businesses[0]);
      res.locals = response.jsonBody.businesses[0].image_url;
      return next();
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = yelpDataController;
