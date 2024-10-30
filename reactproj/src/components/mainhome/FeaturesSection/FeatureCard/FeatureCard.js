
import styles from './FeatureCard.module.css';

import React from 'react';


const FeatureCard = ({ title, text }) => {
  return (
    <div className={`card ${styles.featureCard} shadow-sm`}>
      <div className="card-body">
        <h5 className={`card-title ${styles.cardTitle}`}>{title}</h5>
        <p className={`card-text ${styles.cardText}`}>{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
