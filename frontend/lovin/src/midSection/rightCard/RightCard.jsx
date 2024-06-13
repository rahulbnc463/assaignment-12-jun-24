import React from "react";
import "./RightCard.css";
import background from "../../assets/Background.png";
import shoes from "../../assets/Shoe.png";
import rounde from "../../assets/roudeShape.png";
const RightCard = () => {
  return (
    <div className="rightCard">
      <div className="cointainer">
        <div className="backgroundDiv">
          <img src={background} alt="" />
          <div className="shoes">
            <img src={shoes} alt="" />
          </div>
          <div className="theCollest">
            <img style={{ width: "46px" }} src={rounde} alt="" />
            <div className="headingforRounded">The coolest shoes for you</div>
          </div>
          <div className="theCollest2">
            <img style={{ width: "46px" }} src={rounde} alt="" />
            <div className="headingforRounded2">
              Endless fashion hunts are over
            </div>
          </div>
          <div className="theCollest3">
            <img style={{ width: "46px" }} src={rounde} alt="" />
            <div className="headingforRounded3">Trusted by most innov</div>
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
