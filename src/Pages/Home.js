import React from "react";
import BannerSetion from "../Components/LocalComponent/HomePage/BannerSetion/BannerSetion";
import EventSection from "../Components/LocalComponent/HomePage/EventSection/EventSection";
import InternSection from "../Components/LocalComponent/HomePage/InternSection/InternSection";
import IntroSection from "../Components/LocalComponent/HomePage/IntroSection/IntroSection";
import PlacementSection from "../Components/LocalComponent/HomePage/PlacementSection/PlacementSection";
import ExpandCollapseModal from "../Components/Modal/ExpandCollapseModal/ExpandCollapseModal";

function Home() {
  return (
    <div>
      <BannerSetion />
      <IntroSection />
      <EventSection />
      <PlacementSection />
      <InternSection />
    </div>
  );
}

export default Home;
