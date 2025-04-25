import React from "react";
import DownloadSection from "../components/DownloadSection";
import LargeScreenNav from "../components/LargeScreenNav";
import SmallScreenNav from "../components/SmallScreenNav";

const Download = () => {
  return (
    <div>
      <SmallScreenNav />
      <LargeScreenNav />
      <DownloadSection />
    </div>
  );
};

export default Download;
