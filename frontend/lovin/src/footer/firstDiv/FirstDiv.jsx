import React from "react";
import "./FirstDiv.css";

const categories = [
  "Lifestyle",
  "Technology",
  "Bags",
  "Gaming",
  "Sport",
  "Necklaces",
];
const FirstDiv = () => {
  return (
    <div className="FooterFirstDiv">
      <h2 className="categories-header">
        <span className="header-line"></span>
        <span className="header-line"></span>
        TOP CATEGORIES
      </h2>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstDiv;
