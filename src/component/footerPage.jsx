import React from "react";
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import logoimage from "../component/images/logoimg.png";
import { FaTwitch } from "react-icons/fa";
const FooterPage = () => {
  return (
    <div style={{ height: "200px", width: "100%" }}>
      <footer className="footerpage">
        <div className="foo">
          <div style={{ fontSize: "40px", float: "left", width: "50%" }}>
            <h3>maulik parmar</h3>
            <AiFillGoogleCircle />
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <FaTwitch />
          </div>
          <div className="fooright">
            <h1>asd</h1>
            <img src={logoimage} style={{ width: "30%" }} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
