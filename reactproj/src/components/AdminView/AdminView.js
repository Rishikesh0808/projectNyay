import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AdminView.module.css';
import {useNavigate} from 'react-router-dom'
const AdminView = () => {
  const navigate=useNavigate()
  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
        <div className="container-fluid">
          <div className={styles.tit}>NYAY</div>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav ms-auto navs">
              <button className={`btn btn-light ${styles['nav-button']}`} onClick={() => {navigate('/addpolice')}}>ADD POLICE OFFICER</button>
              <button className={`btn btn-light ${styles['nav-button']}`} onClick={() => {navigate('/addcase')}}>ADD CASES</button>
              <button className={`btn btn-light ${styles['nav-button']}`} onClick={() => {navigate('/addLawyers')}}>ADD LAWYERS</button>
              <button className={`btn btn-light ${styles['nav-button']}`} onClick={() =>{navigate('/addfines')}}>ADD COURT FINES</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Welcome Message */}
      <div className={`${styles.welcomeContainer} d-flex align-items-center justify-content-center`} style={{ height: 'calc(100vh - 56px)' }}>
        <h1 className="text-center" style={{ color: 'black' ,marginBottom:'150px'}}>WELCOME ADMIN</h1>
      </div>
    </div>
  );
}

export default AdminView;
