import React from "react";
import BannerPlacementSection from "../Components/LocalComponent/PlacementPage/BannerPlacementSection/BannerPlacementSection";
import PlacementSearchSection from "../Components/LocalComponent/PlacementPage/PlacementSearchSection/PlacementSearchSection";
import PlacementFullList from "../Resource/PlacementPageResource/PlacementListResource/PlacementFullList";

function PlacementPage() {
  return (
    <div>
      <BannerPlacementSection />
      <PlacementSearchSection PlacementList={PlacementFullList} />
    </div>
  );
}

export default PlacementPage;
