import React from "react";
import "./Hero.css";
import HandIcon from "../Assets/hand_icon.png";
import ArrowIcon from "../Assets/arrow.png";
import HeroImage from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <>
          <h2>NEEW ARRIVALS ONLY</h2>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={HandIcon} alt="hand-image" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
          <div className="hero-latest-btn">
            <h2>Latest Collection</h2>
            <img src={ArrowIcon} alt="arrow-image" />
          </div>
        </>
      </div>
      <div className="hero-right">
        <img src={HeroImage} alt="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
