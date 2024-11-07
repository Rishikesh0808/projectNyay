
import styles from './HeroSection.module.css';
import React from 'react';
import {useNavigate} from 'react-router-dom'
const HeroSection= ()=> {
  const navigate=useNavigate();
  return (
    <section className={styles.heroSection}>
      <div className="text-center">
        <h1 className={styles.heroTitle}>NYAY</h1>
        <p className={styles.heroSubtitle}>JUDICIARY MADE EASY AND SIMPLE</p>
        <div className={styles.heroButtons}>
          <button className="btn btn-primary btn-lg mr-3" style={{marginRight:"35px",backgroundColor:"black"}} onClick={()=>{navigate('/login')}}>Get started</button>
          <button className="btn btn-outline-secondary btn-lg" onClick={()=>{navigate('/learn')}}>Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

