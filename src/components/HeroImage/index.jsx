import React from 'react';
import heroImage from '../../assets/images/Influencer.png'; 

const HeroImage = () => (
  <div className="hero-image" style={{ flex: 1 }}>
    <img src={heroImage} alt="Hero" style={{ width: '80%', height: 'auto' }} />
  </div>
);

export default HeroImage;
