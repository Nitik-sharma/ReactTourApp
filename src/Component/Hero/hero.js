import React from "react";

import "./hero.css";
import { Link } from "react-router-dom";
function Hero({ img1, title, text, buttonText, url, heroBtn, cName }) {
  return (
    <div className={cName}>
      <img alt="hero-img" src={img1} className="hero-img" />
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to={url} className={heroBtn}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default Hero;
