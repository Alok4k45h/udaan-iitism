import React from "react";
import "./IntroSection.css";

function IntroSection() {
  return (
    <div className="pt-5">
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 p-3">
              <div className="aim-container shadow-lg p-3 mb-5 bg-white rounded">
                <h1 className="text-center intro-section-heading">AIM</h1>
                <p className="intro-section-description">
                  Paragraphs Words Bytes Lists Rich TextHTML Copy Lorem ipsum
                  dolor sit amet consectetur adipiscing elit commodo dis
                  dapibus, placerat ac ultrices lacinia praesent porta eu platea
                  vivamus, interdum sodales enim justo pellentesque et curae
                  ante odio. Viverra suscipit consequat non dictum lacus
                  dignissim rutrum, nostra luctus aenean purus suspendisse
                  taciti semper, magna phasellus ridiculus a tempor potenti.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-4">
              <div className="embed-responsive embed-responsive-16by9 mt-3 mb-3">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-3 p-3">
              <div className="vision-container shadow-lg p-3 mb-5 bg-white rounded">
                <h1 className="text-center intro-section-heading">VISION</h1>
                <p className="intro-section-description">
                  Paragraphs Words Bytes Lists Rich TextHTML Copy Lorem ipsum
                  dolor sit amet consectetur adipiscing elit commodo dis
                  dapibus, placerat ac ultrices lacinia praesent porta eu platea
                  vivamus, interdum sodales enim justo pellentesque et curae
                  ante odio. Viverra suscipit consequat non dictum lacus
                  dignissim rutrum, nostra luctus aenean purus suspendisse
                  taciti semper, magna phasellus ridiculus a tempor potenti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
