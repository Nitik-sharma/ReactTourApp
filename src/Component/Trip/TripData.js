import React from "react";
import "./TripStyle.css";
function TripData({ img, heading, text }) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={img} />
      </div>
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
}

export default TripData;
