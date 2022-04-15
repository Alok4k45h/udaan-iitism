import React from "react";
import ExpandCollapseModal from "../../../Modal/ExpandCollapseModal/ExpandCollapseModal";
import "./PlacementDetailedSection.css";

function PlacementDetailedSection() {
  return (
    <div>
      <div className="about-me-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3">
              <h1 className="about-me-section-heading">
                Placement Detailed View
              </h1>
            </div>
            <div className="col-12 col-md-4">
              <div className="img-container text-center">
                <img
                  src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
                  alt=""
                  className="about-me-section-image mb-3"
                />
                <h3 className="about-me-section-sub-heading">Sundar Pichhai</h3>
                <p className="about-me-section-description">Google</p>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="expand-container">
                <ExpandCollapseModal />
                <ExpandCollapseModal />
                <ExpandCollapseModal />
                <ExpandCollapseModal />
                <ExpandCollapseModal />
                <ExpandCollapseModal />
                <ExpandCollapseModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacementDetailedSection;
