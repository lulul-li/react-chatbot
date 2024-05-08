import React from "react";
import hero from "../assets/hero-removebg-preview.png";
import "../Styles/Hero.css";

function Hero() {

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">
            Postpartum Depression Awareness Hub
          </h2>
          <p className="text-descritpion">
            Here, we provide vital information and support for postpartum depression. Take a quick self-assessment with our chatbot to understand if you might be experiencing PPD. Whether you need help or want to support others, we're here for you. Let's promote healthier motherhood together!
          </p>

      </div>
        <div className="hero-image-section">
          <img className="hero-image1" src={hero} alt="Doctor" />
        </div>

    </div>
    </div>
  );
}

export default Hero
