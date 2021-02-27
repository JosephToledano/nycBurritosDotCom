const db = require("../db/burritoBlogModels.js");
const yelpKey = require("../../settings.js");

const burritoBlogController = {};

//Read
burritoBlogController.getReviews = (req, res, next) => {
  const sql = `SELECT * FROM reviews ORDER BY rating desc`;

  db.query(sql, (error, response) => {
    if (error) return next(error);
    // console.log(response)
    res.locals = response.rows;
    next();
  });
};
//Create
burritoBlogController.addReviews = async (req, res, next) => {
  const yelp = require("yelp-fusion");
  const client = yelp.client(yelpKey);
  let restaurant_image_url;

  await client
    .search({
      term: req.body.restaurant_name,
      location: `${req.body.borough}, ny`,
    })
    .then((response) => {
      console.log("this is the response body", response.jsonBody.businesses[0]);
      restaurant_image_url = response.jsonBody.businesses[0].image_url;
    })
    .catch((e) => {
      console.log(e);
    });

  console.log("this is the restaurant image url", restaurant_image_url);
  const sql = {
    text:
      "INSERT INTO reviews ( user_id, burrito_type,restaurant_name, neighborhood, borough, price, rating, restaurant_image_url) VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
    values: [
      req.body.user_id,
      req.body.burrito_type,
      req.body.restaurant_name,
      req.body.neighborhood,
      req.body.borough,
      req.body.price,
      req.body.rating,
      restaurant_image_url,
    ],
  };

  db.query(sql, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals.imageUrl = restaurant_image_url;
    return next();
  });
};

//update
burritoBlogController.updateReviews = (req, res, next) => {
  const sql = {
    text:
      "UPDATE reviews SET (burrito_type, restaurant_name, borough ,neighborhood, price, rating, _id) = ($1, $2, $3, $4, $5, $6, $7) WHERE _id = $7 ",
    values: [
      req.body.burrito_type,
      req.body.restaurant_name,
      req.body.neighborhood,
      req.body.borough,
      req.body.price,
      req.body.rating,
      req.body._id,
    ],
  };
  // UPDATE reviews SET burrito_type=($1) restaurant_name=($2), neighborhood=($3), price=($4), rating=($5), _id=($6) WHERE _id =($6)
  db.query(sql, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    // console.log(response)
    return next();
  });
};
//delete
burritoBlogController.deleteReviews = (req, res, next) => {
  const sql = {
    text: "DELETE from reviews WHERE _id = ($1)   ",
    // text: 'DELETE from reviews (burrito_type, restaurant_name, neighborhood, price, rating, _id) = ($1, $2, $3, $4, $5, $6) WHERE _id = $6 ',
    values: [req.params.id],
  };
  //:burrito:
  console.log(":burrito:");
  db.query(sql, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    // console.log(response)
    return next();
  });
};

module.exports = burritoBlogController;
