import React from "react";
import PlacementData from "../../../../Resource/HomePageResource/PlacementResource/PlacementResource";
import PlacementCardModal from "../../../Modal/PlacementCardModal/PlacementCardModal";

import "./PlacementSection.css";

function PlacementSection() {
  return (
    <div>
      <div
        className="explore-placement-section pt-5 pb-5"
        id="explorePlacementSection"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="placement-section-heading">Placement Stories</h1>
            </div>

            {PlacementData.map((data) => (
              <PlacementCardModal
                key={data.id}
                imgLink={data.imgLink}
                Title={data.Title}
                name={data.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacementSection;
