import React from "react";
import "./FourthDiv.css";
import arrowUp from "../../assets/arrowUp.png";
const FourthDiv = () => {
  return (
    <div className="FooterFourthDiv">
      <div className="productPurchaseArrow">
        <h2 className="productPurchase">Product purchases per year</h2>
        <img src={arrowUp} alt="" />
      </div>
      <div className="thirdBox450">450+</div>
    </div>
  );
};

export default FourthDiv;
