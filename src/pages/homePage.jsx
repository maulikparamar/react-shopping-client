import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../component/images/1.jpg";
import image2 from "../component/images/2.jpg";
import image3 from "../component/images/3.jpg";
import Homebody from "./homebody";
import men from "../component/images/men.jpg";
import women from "../component/images/women.jpg";
import shoes from "../component/images/shoes.jpg";

import { useState } from "react";

import "../component/navBar.css";
import FooterPage from "../component/footerPage";
const HomePage = () => {
  const [products, setProducts] = useState([
    { name: "men", img: men },
    { name: "women", img: women },
    { name: "shoes", img: shoes },
  ]);

  return (
    <React.Fragment>
      <main>
        <div style={{ paddingTop: "-10rem" }}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={image1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src={image2} alt="Third slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div style={{ margin: "0 auto", width: "90%" }}>
          <h1>TRENDING</h1>
          <h3
            style={{
              borderBottom: "1px solid black",
              paddingBottom: "10px",
              width: "30%",
            }}
          >
            MOST TRENDY CLOTHES
          </h3>

          <Homebody />
        </div>
        <br></br>
        <div style={{ margin: "0 auto", width: "90%" }}>
          {" "}
          <div className="threeimg" style={{ marginBottom: "10px" }}>
            {products &&
              products.map((t, i) => (
                <div className="maitn" key={i}>
                  <img className="img" src={t.img} alt="Shoppybeen" />
                  <a className="buttonshado">{t.name}</a>
                </div>
              ))}
          </div>
        </div>
        <br></br>
        <div style={{ margin: "0 auto", width: "90%" }}>
          <div className="novermbersale" style={{ marginBottom: "20px" }}>
            <div className="novembersaleleft">
              <h4>NOVEMBER SALE</h4>
              <h6>FREE SHIPPING OVER $125 FOR INTERNATIONAL ORDERS</h6>
            </div>
            <div className="novembersaleright">
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "100%",
                }}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </main>
      <FooterPage />
    </React.Fragment>
  );
};

export default HomePage;
