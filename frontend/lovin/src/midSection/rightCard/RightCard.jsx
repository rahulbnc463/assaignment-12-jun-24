import React from "react";
import "./RightCard.css";
import background from "../../assets/Background.png";
import shoes from "../../assets/Shoe.png";
const RightCard = () => {
  return (
    <div className="rightCard">
      <div className="cointainer">
        <div className="backgroundDiv">
          <img src={background} alt="" />
          <div className="shoes">
            <img src={shoes} alt="" />
          </div>
        </div>

        {/* The Right one */}
        <div className="sales-component">
          <p>Trusted by the most innovative companies worldwide</p>
          <div className="cta-button">
            <span className="cta-text">TALK TO SALES</span>
            <span className="arrow">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
