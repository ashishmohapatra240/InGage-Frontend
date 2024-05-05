import React from "react";
import heroImage from "../../assets/images/Influencer.png";

const HeroImage = () => (
  <div className="hero-image" style={{ flex: 1 }}>
    <img src={heroImage} alt="Hero" style={{ width: "100%", height: "auto",marginLeft:"auto",marginRight:"auto"}} />
  </div>
);

export default HeroImage;
