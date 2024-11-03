import React, { useState } from 'react';
import styles from './Addcases.module.css';
import axios from 'axios';

const AddCaseForm = () => {
  // State for each form field
  const [formData, setFormData] = useState({
    petitioner_name: '',
    petitioner_advocate: '',
    respondent_name: '',
    respondent_advocate: '',
    first_hearing: '',
    recent_hearing: '',
    next_hearing: '',
    caseNumber: '',
    caseStatus: ''
  });

  // Handle change for each input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('http://localhost:3005/addcase', formData);
      console.log(response.data);
      if (response.status === 201) {
        alert('Case added successfully');
      }
    } catch (error) {
      console.error('Error adding case:', error);
      alert('There was an error adding the case');
    }
  };

  return (
    <div className={`container ${styles.formContainer}`}>
      <h2 className={styles.heading}>Add Case</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className={styles.label} htmlFor="petitioner_name">Petitioner Name</label>
          <input type="text" className="form-control" id="petitioner_name" placeholder="Enter petitioner name" value={formData.petitioner_name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className={styles.label} htmlFor="petitioner_advocate">Petitioner Advocate</label>
          <input type="text" className="form-control" id="petitioner_advocate" placeholder="Enter advocate's name" value={formData.petitioner_advocate} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className={styles.label} htmlFor="respondent_name">Respondent Name</label>
          <input type="text" className="form-control" id="respondent_name" placeholder="Enter respondent name" value={formData.respondent_name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className={styles.label} htmlFor="respondent_advocate">Respondent Advocate</label>
          <input type="text" className="form-control" id="respondent_advocate" placeholder="Enter advocate's name" value={formData.respondent_advocate} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className={styles.label} htmlFor="first_hearing">First Hearing</label>
          <input type="date" className="form-control" id="first_hearing" value={formData.first_hearing} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className={styles.label} htmlFor="recent_hearing">Recent Hearing</label>
          <input type="date" className="form-control" id="recent_hearing" value={formData.recent_hearing} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className={styles.label} htmlFor="next_hearing">Next Hearing</label>
          <input type="date" className="form-control" id="next_hearing" value={formData.next_hearing} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className={styles.label} htmlFor="caseNumber">Case Number</label>
          <input type="text" className="form-control" id="caseNumber" placeholder="Enter case number" value={formData.caseNumber} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className={styles.label} htmlFor="caseStatus">Case Status</label>
          <select className="form-control" id="caseStatus" value={formData.caseStatus} onChange={handleChange}>
            <option value="">Select status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="Pending">Pending</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
        <button type="submit" className={`btn btn-dark ${styles.submitButton}`}>Submit</button>
      </form>
    </div>
  );
};

export default AddCaseForm;
