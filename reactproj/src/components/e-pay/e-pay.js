import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './e-pay.module.css';

const EpayForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    CNR: '',
    name: '',
    age: '',
    gender: '',
    caseRegistrationDate: '',
    paymentAmount: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('jwt');
      if (!token) {
        console.error('No token found in localStorage');
        setError('Authentication error: No token found');
        setIsSubmitting(false);
        return;
      }

      const response = await axios.post('http://localhost:3005/enter', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Response:', response.data);
      navigate('/update');
    } catch (error) {
      console.error('Request failed:', error.message);
      setError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.Main}>
      <div className={styles.card}>
        <h1 className={styles.formTitle}>E-CHALLAN FORM</h1>
        <form
          className={`${styles.myform} ${isSubmitting ? styles.formLoading : ''}`}
          onSubmit={handleSubmit}
        >
          <label htmlFor="CNR" className={styles.label}>CNR Number:</label>
          <input
            type="text"
            id="CNR"
            name="CNR"
            placeholder="Enter CNR number"
            className={styles.inputText}
            value={formData.CNR}
            onChange={handleChange}
            required
          />

          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className={styles.inputText}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="age" className={styles.label}>Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            className={styles.inputText}
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label className={styles.label}>Gender:</label>
          <div className={styles.genderContainer}>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                className={styles.radio}
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                required
              />
              <label htmlFor="male" className={styles.label}>Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                className={styles.radio}
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                required
              />
              <label htmlFor="female" className={styles.label}>Female</label>
            </div>
          </div>

          <label htmlFor="caseRegistrationDate" className={styles.label}>Date of Case Registration:</label>
          <input
            type="date"
            id="caseRegistrationDate"
            name="caseRegistrationDate"
            className={styles.inputDate}
            value={formData.caseRegistrationDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="paymentAmount" className={styles.label}>Payment Amount:</label>
          <input
            type="number"
            id="paymentAmount"
            name="paymentAmount"
            placeholder="Enter payment amount"
            className={styles.inputText}
            value={formData.paymentAmount}
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.button} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {isSubmitting && (
            <div className={styles.loadingOverlay}>
              <div className={styles.loadingSpinner}></div>
            </div>
          )}

          {error && <div className={styles.error}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default EpayForm;
