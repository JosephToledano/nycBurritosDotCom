const db = require("../db/burritoBlogModels.js");

const signUpController = {};

//Create
signUpController.addUser = (req, res, next) => {
  const sql = {
    text: "INSERT INTO users (username, password) VALUES($1, $2) returning *",
    values: [req.body.username, req.body.password],
  };

  db.query(sql, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    console.log("this is the response", response);
    res.locals.user_id = response.rows[0]._id;
    res.locals.username = response.rows[0].username;
    res.locals.password = response.rows[0].password;
    return next();
  });
};

module.exports = signUpController;
