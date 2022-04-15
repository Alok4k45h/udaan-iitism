import React from "react";
import Typewriter from "typewriter-effect";
import "./BannerSetion.css";

function BannerSetion() {
  return (
    <div>
      <div className="banner-section-bg-container d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 text-center">
              <img
                src="./udaanLogo.jpg"
                className="banner-section-image"
                alt=""
              />
            </div>

            <div className="col-12 col-md-7 order-2 order-md-1 d-flex flex-column justify-content-center text-center">
              <h1 className="banner-section-heading mb-3">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Welcome To Udaan-Career Cell of IIT (ISM)")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString(
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit, lacinia nec "
                      )
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Welcome To Udaan-Career Cell of IIT (ISM)")
                      .start();
                  }}
                />
              </h1>
              <p className="banner-section-description mb-3">
                Explore the various career aspects with Ease
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSetion;
