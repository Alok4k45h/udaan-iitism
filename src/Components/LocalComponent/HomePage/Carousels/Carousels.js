import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousels.css";

function Carousels() {
  return (
    <div className="banner-container">
      <div className="carousel-container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="carousel-image"
              src="./carouselImage.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image"
              src="./carouselImage.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image"
              src="./carouselImage.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>alok kumar</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousels;
