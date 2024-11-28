import React, { useState, useEffect } from 'react';
import styles from './lawyerinfo.module.css'; // Importing the CSS module
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios'
// Mock function to simulate API call
const fetchLawyers = async (jurisdiction, lawyerType) => {
  const response = await axios.get("http://localhost:3005/lawyers")
  const allLawyers=response.data;
  
  

  return allLawyers.filter(lawyer => {
    return (
      (!jurisdiction || lawyer.jurisdiction === jurisdiction) &&
      (!lawyerType || lawyer.type === lawyerType)
    );
  });
};

const Lawyerinfo = () => {
  const [jurisdiction, setJurisdiction] = useState('');
  const [lawyerType, setLawyerType] = useState('');
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    const getLawyers = async () => {
      const results = await fetchLawyers(jurisdiction, lawyerType);
      setLawyers(results);
    };

    getLawyers();
  }, [jurisdiction, lawyerType]); // Re-fetch lawyers whenever filters change

  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.title}>Find a Lawyer</h1>

      <div className="row mb-4">
        <div className="col-md-6">
          <label className={`form-label ${styles.label}`}>Jurisdiction:</label>
          <select 
            className="form-select" 
            value={jurisdiction} 
            onChange={(e) => setJurisdiction(e.target.value)}
          >
            <option value="">All</option>
            <option value="Hyderabad">Hyderabad Sessions Court</option>
            <option value="Adilabad">Adilabad Sessions Court</option>
            <option value="Medak">Medak Sessions Court</option>
            <option value="Warangal"> Warangal Sessions Court</option>
            <option value="Nalgonda">Nalgonda Civil Court</option>
            <option value="Medchal">Medchal Sessions Court</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className={`form-label ${styles.label}`}>Type of Lawyer:</label>
          <select 
            className="form-select" 
            value={lawyerType} 
            onChange={(e) => setLawyerType(e.target.value)}
          >
            <option value="">All</option>
            <option value="Criminal">Criminal</option>
            <option value="Civil">Civil</option>
            <option value="Corporate">Corporate</option>
          </select>
        </div>
      </div>

      <h2 className="text-dark">Available Lawyers</h2>
      <ul className="list-group">
        {lawyers.map(lawyer => (
          <li key={lawyer.id} className={`list-group-item ${styles.lawyerItem}`}>
            <div className={styles.lawyerDetails}>
              <i className={`fa fa-user-circle ${styles.icon}`}></i>
              <div>
                <h5 className="mb-0">{lawyer.name} - {lawyer.type} Lawyer</h5>
                <p className="mb-0 ">{lawyer.jurisdiction}</p>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <p className="mb-1"><i className={`fa fa-phone ${styles.contactIcon}`}></i>{lawyer.phone}</p>
              <p className="mb-0"><i className={`fa fa-envelope ${styles.contactIcon}`}></i>{lawyer.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lawyerinfo;
