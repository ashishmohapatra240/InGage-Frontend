import React from 'react';
import Form from '../../components/Form/Form';
import HeroImage from '../../components/HeroImage/HeroImage';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <HeroImage />
      <Form />
    </div>
  );
};

export default LandingPage;