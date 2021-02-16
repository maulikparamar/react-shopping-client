import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/homePage";
import Product from "./pages/product";
import NavBar from "./component/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home />
        </Route>
        <Route exact path="/product">
          <NavBar />
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}
