import {useEffect,React}from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './MainPolice.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MainPolice = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("userId"))
    { 
      navigate('/logout')
    }
  },[])
  return (
    <div className={styles.MainPolice}>
      <div className={styles.header}>
        {/* User Icon with Dropdown */}
        <Dropdown align="end" className={styles.userIcon}>
          <Dropdown.Toggle variant="link" bsPrefix="user-icon-toggle">
            <i className="bi bi-person-circle text-white" style={{ fontSize: '1.5rem' }}></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => {
              localStorage.clear();
              navigate('/logout')}}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className={styles.content}>
        <h1 className="text-white">WELCOME POLICE OFFICER</h1>
        <div className="text-center mt-4">
          <button className="btn btn-outline-light mx-2" onClick={() => navigate('/view')}>View Petitions</button>
          <button className="btn btn-outline-light mx-2" onClick={() => navigate('/retrieve')}>Retrieve Filed Cases</button>
        </div>
      </div>
    </div>
  );
};

export default MainPolice;
