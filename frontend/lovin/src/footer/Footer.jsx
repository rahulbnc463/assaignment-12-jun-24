import React from "react";
import FirstDiv from "./firstDiv/FirstDiv";
import FourthDiv from "./fourthDiv/FourthDiv";
import SecondDiv from "./secondDiv/SecondDiv";
import ThirdDiv from "./thirdDiv/ThirdDiv";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="masterFooter">
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />
      <FourthDiv />
    </div>
  );
};

export default Footer;
