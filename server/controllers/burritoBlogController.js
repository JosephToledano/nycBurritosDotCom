
const db = require('../db/burritoBlogModels.js');

const burritoBlogController = {};

//Read
burritoBlogController.getReviews = (req, res, next) => {
  const sql = `SELECT * FROM reviews ORDER BY rating desc`

  db.query(sql, (error, response) => {
    if(error) return next(error);
    // console.log(response)
    res.locals = response.rows;
    next();
  });
};
//Create
burritoBlogController.addReviews = (req, res, next) => { 
    const sql = { 
        text: 'INSERT INTO reviews (burrito_type, restaurant_name, neighborhood, price, rating) VALUES($1, $2, $3, $4, $5)',
        values: [req.body.burrito_type, req.body.restaurant_name, req.body.neighborhood, req.body.price, req.body.rating],
      };
  
      db.query(sql, (error, response) => {
        if(error) {
          console.log(error);
          return next(error);
        }
        return next();
      });
  };

//update
burritoBlogController.updateReviews = (req, res, next) => {
  const sql = {
    text: 'UPDATE reviews SET (burrito_type, restaurant_name, neighborhood, price, rating, _id) = ($1, $2, $3, $4, $5, $6) WHERE _id = $6 ',
    values: [req.body.burrito_type, req.body.restaurant_name, req.body.neighborhood, req.body.price, req.body.rating, req.body._id]
  }
  // UPDATE reviews SET burrito_type=($1) restaurant_name=($2), neighborhood=($3), price=($4), rating=($5), _id=($6) WHERE _id =($6)
    db.query(sql, (error, response) => {
      if(error){
        console.log(error)
        return next(error)
      };
      // console.log(response)
      return next();
    });
}
//delete
burritoBlogController.deleteReviews = (req, res, next) => {
  const sql = {
    text: 'DELETE from reviews WHERE _id = ($1)   ',
    // text: 'DELETE from reviews (burrito_type, restaurant_name, neighborhood, price, rating, _id) = ($1, $2, $3, $4, $5, $6) WHERE _id = $6 ',
    values: [req.params.id]
  }
  //:burrito: 
  console.log(':burrito:')
    db.query(sql, (error, response) => {
      if(error){
        console.log(error)
        return next(error)
      };
      // console.log(response)
      return next();
    });
  }


  module.exports = burritoBlogController;