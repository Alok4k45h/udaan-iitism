import React from "react";
import InternData from "../../../../Resource/HomePageResource/InternResource/InternResource";
import PlacementCardModal from "../../../Modal/PlacementCardModal/PlacementCardModal";

import "./InternSection.css";

function InternSection() {
  return (
    <div>
      <div
        className="explore-intern-section pt-5 pb-5"
        id="exploreInternSection"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="intern-section-heading">Intern Stories</h1>
            </div>

            {InternData.map((data) => (
              <PlacementCardModal
                key={data.id}
                name={data.name}
                imgLink={data.imgLink}
                Title={data.Title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternSection;
