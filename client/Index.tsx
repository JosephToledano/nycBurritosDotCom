import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import PageRouter from "./PageRouter";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

// uncomment so that webpack can bundle styles
// import styles from './scss/Index.css';
ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <PageRouter />
    </BrowserRouter>
  </RecoilRoot>,
  // <App />,

  document.getElementById("root")
);
