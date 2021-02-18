import React, { useState } from "react";
import product from "../component/images/tshirt.jpg";
import product1 from "../component/images/thisrt1.jpg";
import product2 from "../component/images/tshirt2.jpg";
import product3 from "../component/images/tshirt4.jpg";
import product4 from "../component/images/tshirt5.jpg";
import StarRatings from "react-star-ratings";
import { AiOutlineHeart } from "react-icons/ai";
import Homebody from "./homebody";
import FooterPage from "../component/footerPage";
const Product = () => {
  const [products, setProducts] = useState([
    product,
    product1,
    product2,
    product3,
    product4,
  ]);
  var noOfPic = 4;
  const imgMap = {
    0: product,
    1: product1,
    2: product2,
    3: product3,
    4: product4,
  };
  const [productimag, setProductimage] = useState();
  const [Rating, setChangeRating] = useState();
  const [numbervalue, setNumbervalue] = useState(0);
  const [chnage, setchnage] = useState(product);
  const getRandomPic = () => {
    const random = Math.floor(Math.random() * Math.floor(noOfPic));
    return setchnage(imgMap[random]);
  };
  const click = (t) => {
    setchnage(t);
  };
  // setTimeout(getRandomPic, 8000);
  clearTimeout();
  const changeRating = (t) => {
    setChangeRating(t);
  };
  const plus = () => {
    setNumbervalue(numbervalue + 1);
  };
  const minus = () => {
    if (numbervalue <= 0) return;
    setNumbervalue(numbervalue - 1);
  };

  return (
    <React.Fragment>
      <main className="main">
        <div style={{ marginTop: "20px" }}>
          <div style={{ width: "50%", float: "left" }}>
            <div style={{ width: "30%", float: "left" }}>
              {products &&
                products.map((t, i) => (
                  <div className="productimagemulti" key={i}>
                    <img src={t} alt="no data" onClick={() => click(t)} />
                  </div>
                ))}
            </div>
            <div
              style={{ width: "70%", float: "right" }}
              className="productimg"
            >
              <img src={chnage} alt="shoopybeen" />
            </div>
          </div>
          <div style={{ width: "45%", float: "right" }}>
            <h2 style={{ fontSize: "30px" }}>OBLIVION</h2>
            <h4 style={{ fontSize: "20px" }}>MEN</h4>
            <StarRatings
              rating={Rating}
              starRatedColor="yellow"
              changeRating={changeRating}
              numberOfStars={6}
              name="rating"
              starDimension="20px"
            />
            <h3 style={{ fontSize: "20px", marginTop: "10px" }}>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </h3>
            <h4 style={{ marginTop: "10px", fontSize: "20px" }}>£18.00</h4>
            <h5 style={{ marginTop: "10px", fontSize: "20px" }}>38 in stock</h5>
            <div style={{ float: "left", width: "100%", marginTop: "10px" }}>
              <button
                className="btn btn-secondary"
                style={{ float: "left", marginRight: "5px" }}
                onClick={minus}
                disabled={numbervalue === 0 ? true : false}
              >
                -
              </button>
              <input
                type="text"
                disabled={true}
                value={numbervalue}
                className="form-control"
                style={{
                  width: "90px",
                  float: "left",
                  marginRight: "5px",
                  padding: "12px 30px",
                }}
              />
              <button
                className="btn btn-secondary"
                onClick={plus}
                style={{ float: "left" }}
              >
                +
              </button>
              <button
                className="btn btn-primary"
                style={{
                  letterSpacing: "1px",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                Add Cart
              </button>
            </div>
            <button
              className="btn btn-dark"
              style={{ letterSpacing: "1px", marginTop: "10px", width: "100%" }}
            >
              <AiOutlineHeart />
              Add to Wishlist
            </button>
            <h7 style={{ marginTop: "10px" }}>PRODUCT ID: 15</h7>
            <br></br>
            <h7 style={{ marginTop: "10px" }}>CATEGORY: MEN</h7>
          </div>
        </div>
        <div style={{ width: "100%", float: "left", margin: "3% 0" }}>
          <Homebody />
        </div>
      </main>
      <FooterPage />
    </React.Fragment>
  );
};

export default Product;
