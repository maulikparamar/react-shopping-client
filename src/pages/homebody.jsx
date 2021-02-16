import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../component/images/img.jpg";
const Homebody = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <React.Fragment>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={800}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
      >
        <div>
          <div className="card" style={{ width: "14rem" }}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">asdfe bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="card" style={{ width: "14rem" }}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">he bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="card" style={{ width: "14rem" }}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="card" style={{ width: "14rem" }}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="card" style={{ width: "14rem" }}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </React.Fragment>
  );
};

export default Homebody;
