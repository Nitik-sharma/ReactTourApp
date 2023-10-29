// DestinationData.js
import React from "react";
import kadernath from "../../assest/kedarnath-temple.webp";
import Kadernath1 from "../../assest/kedarnath-temple-1.webp";
import "./Destination.css";

function DestinationData({ title, heading, img1, img2, cName }) {
  return (
    <div className={cName}>
      <div className="des-text">
        <h2>{title}</h2>
        <p>{heading}</p>
      </div>
      <div className="des-img">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
      </div>
    </div>
  );
}

export default DestinationData;
