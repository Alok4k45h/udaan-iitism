import React from "react";
import Typewriter from "typewriter-effect";
import "./BannerPlacementSection.css";

function BannerPlacementSection() {
  return (
    <div className="banner-placement-section pt-5 pb-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 order-1 order-md-2 d-flex flex-column justify-content-center text-center">
            <h1 className="banner-placement-section-heading pb-2">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Welcome To Placement Section")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                      "Lorem ipsum dolor sit amet consectetur adipiscing "
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Welcome To Placement Section")
                    .start();
                }}
              />
            </h1>
            <div className="d-md-none">
              <img src="" alt="" />
            </div>
          </div>

          <div className="col-12 col-md-5 order-2 order-md-1 d-none d-md-block ">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerPlacementSection;
