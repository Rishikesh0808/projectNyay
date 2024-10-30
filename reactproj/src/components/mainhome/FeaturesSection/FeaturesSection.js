
import styles from './FeaturesSection.module.css';

import React from 'react';
import FeatureCard from './FeatureCard/FeatureCard';


const features = [
  { title: 'Track Status', text: 'Your Court case details will be tracked here.' },
  { title: 'File Online FIR', text: 'To file FIR through online and register the complaint in the court.' },
  { title: 'E-Challan', text: 'To pay the pending amount or fines to court.' },
];

const FeaturesSection = () => {
  return (
    <section className={`container my-5 ${styles.featuresSection}`}>
      <div className="row text-center">
        {features.map((feature, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <FeatureCard title={feature.title} text={feature.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

