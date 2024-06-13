import React from "react";
import "./ThirdDiv.css";
import thirdBox from "../../assets/ThirdBox.png";
const ThirdDiv = () => {
  return (
    <div className="FooterThirdDiv">
      <h2 className="wePromise">No more endless fashion hunts - we promise.</h2>
      <div className="thirdBox">
        <img src={thirdBox} alt="" />
      </div>
    </div>
  );
};

export default ThirdDiv;
