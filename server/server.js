const express = require("express");
const app = express();
const path = require("path");
const passport = require("passport");
const cors = require("cors");
const port = process.env.PORT || 3001;
const googleRouter = require("./routes/google");
const apiRouter = require("./routes/api");
const yelpRouter = require("./routes/yelp");
const signUpRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const { response } = require("express");
require("./controllers/googleLoginController");

app.use(cookieParser());
app.use(express.json());
app.use(cors());

// statically serve everything in the build folder on the route '/build'
app.use("/build", express.static(path.join(__dirname, "../build")));
// serve index.html on the route '/'
app.use("/api", apiRouter);
app.use("/signup", signUpRouter);
app.use("/login", loginRouter);
app.use("/google", googleRouter);
app.use("/yelp", yelpRouter);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3001" }));

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Send homepage - Optional?
app.get("/*", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Listener
app.listen(port, () => {
  console.log(`💥 Port is listening to ${port} 💥`);
});
