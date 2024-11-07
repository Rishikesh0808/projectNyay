import {React,useState,useEffect} from 'react';
import { useNavigate, } from 'react-router-dom';
import styles from './home.module.css';
import More from '../more/more';

const Home = () => {
 
 
useEffect(()=>{
  if(!localStorage.getItem("userId"))
  { 
    navigate('/logout')
  }
},[])
// Conditional rendering

  const navigate = useNavigate();

  const handleEpayClick = () => {
    navigate('/epay');
  };

  return (
    <div className='.Main'>
      <div className={styles.navbar}>
        <div className={styles.tit}>NYAY</div>
        <div className={styles.buttons} onClick={()=>{
          localStorage.clear();
          navigate('/logout')}}>
        LOG OUT
        </div>
        <div className={styles.buttons} onClick={()=>{navigate('/aboutus')}}>
        ABOUT US
        </div>
        <div className={styles.buttons} onClick={()=>{navigate('/lawyers')}}>
        PRIVATE LAWYERS
        </div>
        <div className={styles.buttons} onClick={()=>{navigate('/check')}}>
        CHECK UPDATE
        </div>
        <div className={styles.buttons} onClick={()=>{navigate("/chat")}}>CHAT</div>
        
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.indimg}>
          <img src="./law-firm-justice-logo_231093-186.avif" alt="Description of the image" onClick={()=>{{navigate('/FIR')}}}/>
          <figcaption>FILE FIR</figcaption>
        </div>
        <div className={styles.indimg} onClick={()=>{navigate('/trackstatus')}}>
          <img src="./tender_17208165.jpg" alt="Description of the image" />
          <figcaption>Track Status</figcaption>
        </div>
        <div className={styles.indimg} onClick={handleEpayClick} style={{ cursor: 'pointer' }}>
          <img src="./people_13353668(1).jpg" alt="Description of the image" />
          <figcaption>e-pay</figcaption>
        </div>
      </div>

      <footer className={styles.footerContainer}>
                {/* Footer Credits Inlined */}
                <p className={styles.creditsText}>
 <strong>Disclaimer:</strong> The information provided here is for general guidance only and may not reflect the latest updates or details specific to individual cases. Legal standards and regulations can vary by jurisdiction and change frequently. For accurate and current information tailored to your situation, please consult a qualified legal professional or refer to official sources.
 Relying solely on this general content without professional consultation may not be suitable for making informed legal decisions.
                </p>
                <p className={styles.creditsText}>
                    For inquiries or support, please contact us at: <strong>Nihal@gmail.com</strong>. Together, we can work towards making the judiciary system more transparent and accessible to all.
                    
                </p>
               

                {/* Social Media Links Inlined */}
                <div className={styles.socialLinks}>
                    <p style={{ display: 'inline' }}>Connect with us:</p>
                    <a href="https://www.facebook.com" target="_blank" className={styles.socialLink}>Facebook</a> |
                    <a href="https://www.twitter.com" target="_blank" className={styles.socialLink}>Twitter</a> |
                    <a href="https://www.linkedin.com" target="_blank" className={styles.socialLink}>LinkedIn</a>
                </div>
            </footer>
    </div>
  );
};

export default Home;
