import React from "react";
import BannerInternSection from "../Components/LocalComponent/InternPage/BannerInternSection/BannerInternSection";
import InternSearchSection from "../Components/LocalComponent/InternPage/InternSearchSection/InternSearchSection";
import InternList from "../Resource/InternPageResource/InternListResource/InternList";

function InternPage() {
  return (
    <div>
      <BannerInternSection />
      <InternSearchSection InternList={InternList} />
    </div>
  );
}

export default InternPage;
