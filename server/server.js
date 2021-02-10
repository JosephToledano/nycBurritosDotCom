const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3001;

const apiRouter = require("./routes/api");
const signUpRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// statically serve everything in the build folder on the route '/build'
app.use("/build", express.static(path.join(__dirname, "../build")));
// serve index.html on the route '/'
app.use("/api", apiRouter);
app.use("/signup", signUpRouter);
app.use("/login", loginRouter);

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
