import React from "react";
import heroImage from "../../assets/images/Influencer.png";

const HeroImage = () => (
  <div className="hero-image" style={{ flex: 1 }}>
    <img src={heroImage} alt="Hero" style={{ width: "75%", height: "auto",marginLeft:"auto",marginRight:"auto"}} />
  </div>
);

export default HeroImage;
