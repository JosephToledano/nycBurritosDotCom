import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import App from "./App.js";
import PageRouter from "./PageRouter.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// uncomment so that webpack can bundle styles
// import styles from './scss/Index.css';
ReactDOM.render(
  <BrowserRouter>
    <PageRouter />
  </BrowserRouter>,
  //   <App />,
  document.getElementById("root")
);
