import React from "react";
import "./LeftCard.css";
import star from "../../assets/Star.png";
import threeDot from "../../assets/ThreeDot.png";

const LeftCard = () => {
  return (
    <div className="leftCard">
      <div className="modernDiv">
        <div>
          <img src={star} alt="" />
        </div>
        <div>Modern Lifestyle</div>
      </div>
      <div className="exploreDiv">
        Explore our modern collection.
        <div>
          <img src={threeDot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
