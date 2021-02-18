import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/homePage";
import Login from "./pages/Login";
import Register from "./pages/register";
import Product from "./pages/product";
import NavBar from "./component/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import NotFound from "./pages/notfound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/product">
          <NavBar />
          <Product />
        </Route>
        <Route exact path="/home">
          <NavBar />
          <Home />
        </Route>
        <Router path="*">
          <NotFound />
        </Router>
      </Switch>
    </Router>
  );
}
