import React from 'react';
import PropTypes from 'prop-types';
import styles from './mainhome.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './HeroSection/HeroSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';

const Mainhome = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      
      
    </div>
  );
};

export default Mainhome;




