import {React,useState,useEffect} from 'react';
import { useNavigate, } from 'react-router-dom';
import styles from './home.module.css';
import More from '../more/more';

const Home = () => {
 
 

// Conditional rendering

  const navigate = useNavigate();

  const handleEpayClick = () => {
    navigate('/epay');
  };

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.tit}>NYAY</div>
        <div className={styles.buttons} onClick={()=>{}}>
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
                    <strong>Disclaimer:</strong> The content provided here is for general informational purposes only and may not reflect the latest updates in specific cases. Please refer to official sources or consult a legal professional for accurate information.
                </p>
                <p className={styles.creditsText}>
              This project has been created by <b>Lohith</b>,<b>Nihal</b>  and <b>Rishikesh </b> as students passionate about technology and legal accessibility, we have created this platform to empower users with easy access to essential court-related information. Our goal is to foster transparency and understanding within the legal process, making it easier for individuals to navigate their judicial journeys.
                </p>
                <p className={styles.creditsText}>
                    For inquiries or support, please contact us at: <strong>admin@nyay.com</strong>. Together, we can work towards making the judiciary system more transparent and accessible to all.
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
