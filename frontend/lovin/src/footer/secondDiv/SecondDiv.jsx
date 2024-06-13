import React from "react";
import "./SecondDiv.css";
import arrowUp from "../../assets/arrowUp.png";
const SecondDiv = () => {
  return (
    <div className="FooterSecondDiv">
      <div className="shopCollectionArrow">
        <h2 className="shopCollection">Shop Collection</h2>
        <img src={arrowUp} alt="" />
      </div>
      <div className="exploreOurArtisanal">
        <span>Explore Our Artisanal </span>Leather Shoe Collection.
      </div>
    </div>
  );
};

export default SecondDiv;
