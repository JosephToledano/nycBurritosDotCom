const db = require("../db/burritoBlogModels.js");

const loginController = {};

//Create
loginController.verifyUser = (req, res, next) => {
  const sql = {
    text: "select * from users WHERE username = $1 AND password = $2",
    values: [req.body.username, req.body.password],
  };

  db.query(sql, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    console.log("this is the response", response);
    if (response.rows[0].username.length > 0) {
      res.locals.id = response.rows[0]._id;
      res.locals.status = "Go ahead";
      res.locals.username = response.rows[0].username;
      res.locals.password = response.rows[0].password;
      return next();
    }
    return next(error);
  });
};

module.exports = loginController;
