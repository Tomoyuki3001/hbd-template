import React from "react";
import "../Style/topPage.css";
import Image1 from "../Images/Top/top-1.jpg";
import Image2 from "../Images/Top/top-2.jpg";
import Image3 from "../Images/Top/top-3.jpg";
import Image4 from "../Images/Top/top-4.jpg";

const TopPage = () => {
  return (
    <div className="top-container">
      <div className="top-image-container">
        <img className="top-image" src={Image1} alt="" />
        <img className="top-image" src={Image2} alt="" />
        <img className="top-image" src={Image3} alt="" />
        <img className="top-image" src={Image4} alt="" />
      </div>
      <div className="top-text-container">
        <p className="top-text">Happy Birthday!</p>
        <p className="top-text">Name</p>
        <p className="top-age-text">
          Tuened <span className="top-age">24</span>
        </p>
      </div>
    </div>
  );
};

export default TopPage;
