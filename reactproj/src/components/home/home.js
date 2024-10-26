import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {
  const navigate = useNavigate();

  const handleEpayClick = () => {
    navigate('/epay');
  };

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.tit}>NYAY</div>
        <a href="#help">Help</a>
        <div className={styles.dropdown}>
          
        </div>
        
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.indimg}>
          <img src="./law-firm-justice-logo_231093-186.avif" alt="Description of the image" onClick={()=>{navigate('/FIR')}}/>
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

      <div className={styles.footerContainer}>
        <div className={styles.topfooter}>
          <div className="row">
            <div className="col-md-3 borderright"></div>
            <div className="col-md-6">
              <div className="align-middle" role="complementary" id="complementary">
                <a href="https://www.nic.in/" title="National Informatics Centre External website that opens a new window" rel="noopener noreferrer">
                  <img className={styles.fooimg} src="images/nic-logo.png" alt="National Informatics Centre External website that opens a new window" />
                </a>
              </div>
              <div className="row">
                <p>This site is designed, hosted and maintained by <a className="nicLink" href="http://www.nic.in/" rel="noopener noreferrer" title="National Informatics Centre">National Informatics Centre (NIC) <span style={{ fontSize: '0.0000000001px', color: '#000' }}>External website that opens a new window</span></a> Ministry of Electronics & Information Technology, Government of India.</p>
              </div>
            </div>
            <div className="col-md-3">
              <ol style={{ display: 'none' }}>
                <li className="ol-foo-title">Visitor count</li>
                <li><input type="text" name="visitor_count" value="1324657" className="visitor_ct" readOnly /></li>
              </ol>
              <p>Last reviewed and updated on&nbsp;:&nbsp; 13 July 2024</p>
              <p><strong>Download NYAY App :</strong></p>
              <p>
                <a href="https://play.google.com/store/apps/details?id=in.gov.ecourts.eCourtsServices" rel="noopener noreferrer" title="Google play External website that opens a new window" tabIndex="0">
                  <img className={styles.gpB} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAkAQMAAACXJAcjAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo4C2AAACZAABt2QzvQAAAABJRU5ErkJggg==" alt="Google Play" />
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://appsto.re/in/yv-jlb.i" rel="noopener noreferrer" title="App Store External website that opens a new window" tabIndex="0">
                  <img className={styles.appStoreB} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAkAQMAAABfSO31AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA5JREFUeNpjYBgFIxEAAAH4AAF2a/E1AAAAAElFTkSuQmCC" alt="App Store" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottomfooter}>
          <div className="col p-1">
            <p className="m-0">S6 © 2022 eCommittee Supreme Court of India. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
