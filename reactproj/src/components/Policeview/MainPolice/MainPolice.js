import React from 'react';
import styles from './MainPolice.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'
const MainPolice = () => {
  const navigate=useNavigate();
  return(
  <div className={styles.MainPolice}>
    <div className={styles.content}>
      <h1 className="text-white">WELCOME OFFICER</h1>
      <div className="text-center mt-4">
        <button className="btn btn-outline-light mx-2" onClick={()=>{navigate('/view')}}>View Petitions</button>
        <button className="btn btn-outline-light mx-2" onClick={()=>{navigate('/retrieve')}}>Retrieve Filed Cases</button>
      </div>
    </div>
  </div>)
};

export default MainPolice;
