import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import { AiFillPhone, AiFillMail, AiOutlineShoppingCart } from "react-icons/ai";
import "./navBar.css";
const NavBar = () => {
  var prevScroll = 0;
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    setVisible(prevScroll > window.pageYOffset);
    prevScroll = window.pageYOffset;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getClass = () => {
    if (visible)
      return `coustomNav navbar navbar-expand-md navbar-dark bg-dark fixed-top`;
    return `coustomNav coustomNavhidden`;
  };
  const getNavclass = () => {
    if (visible)
      return `coustomNav navbar navbar-expand-md navbar-dark  fixed-top mainwhite`;
    return `coustomNav coustomNavhidden`;
  };
  const topNavclass = () => {
    if (visible)
      return `coustomNav navbar navbar-expand-md navbar-dark fixed-top `;
    return `coustomNav coustomNavhidden topmargin`;
  };
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
        className={getClass()}
      >
        <div className="main">
          <div className="leftside">
            <label>
              <AiFillPhone /> + 00 123 456 789{" "}
            </label>

            <label style={{ border: "none" }}>
              {" "}
              <AiFillMail /> info@gmail.com
            </label>
          </div>
          <div className="rightside">
            <label style={{ border: "none" }}>Login</label>
            <label> Wishlist</label>
            <label> My Account</label>
          </div>
        </div>
      </nav>

      <nav
        className="navbar navbar-expand-md navbar-dark  fixed-top mainwhite"
        style={{ marginTop: "46px", backgroundColor: "white" }}
        className={getNavclass()}
      >
        <div className=" main">
          <div className=" leftside">
            <img src={logo} className="logo" alt="My Awesome Image" />
            <label className="blackcolor logoname">Shoppybeen</label>
          </div>
          <div className="middleside blackcolor">
            <input
              type="search"
              className="form-control"
              placeholder="Search Product.."
              style={{ float: "left", width: "75%" }}
            />
            <button
              type="button"
              className="btn btn-primary btn-block"
              style={{ float: "right", width: "20%" }}
            >
              Search
            </button>
          </div>
          <div
            className=" rightside blackcolor"
            style={{ fontSize: "45px", marginTop: "-20px" }}
          >
            <AiOutlineShoppingCart />
            <label style={{ fontSize: "28px" }}>$500</label>
          </div>
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-md navbar-dark   fixed-top "
        style={{
          marginTop: "116px",
          backgroundColor: "white",
          paddingBottom: "10px",
        }}
        className={topNavclass()}
      >
        <div className="main Navlink">
          <ul>
            <li>
              <NavLink
                exact
                to="/home"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/product"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Contect Me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
