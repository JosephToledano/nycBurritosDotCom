import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import "./index.css";
import App from "./App";
import Restaurants from "./pages/Restaurants";
import Neighborhoods from "./pages/Neighborhoods";
import Blog from "./pages/Blog";
import About from "./pages/About";
import LoginBox from "./components/Nav/LoginBox";

class PageRouter extends Component {
  render() {
    const PageRouter = () => (
      <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/Restaurants' component={Restaurants} />
          <Route path='/Neighborhoods' component={Neighborhoods} />
          <Route path='/Blog' component={Blog} />
          <Route path='/About' component={About} />
          <Route path='/Login' component={LoginBox} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <PageRouter />
      </Switch>
    );
  }
}

export default PageRouter;
