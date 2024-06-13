import React from "react";
import "./MidSection.css";
import LeftCard from "./leftCard/LeftCard";
import RightCard from "./rightCard/RightCard";

const MidSection = () => {
  return (
    <div className="midSection">
      <LeftCard />
      <RightCard />
    </div>
  );
};

export default MidSection;
