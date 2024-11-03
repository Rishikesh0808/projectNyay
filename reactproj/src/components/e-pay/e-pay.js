import React, { useState} from 'react';
import {useNavigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './e-pay.module.css';
import axios from 'axios'
const EpayForm = () => {
  const [formData, setFormData] = useState({
    CNR: '',
    name: '',
    age: '',
    gender: '',
    caseRegistrationDate: '',
    paymentAmount: '',
  });
  const navigate=useNavigate();
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
      localStorage.setItem('Fine',response.data.Fine);
      navigate('/update');
      
    } catch (error) {
      console.log('Request failed:', error.message);
      alert("RECORD NOT FOUND");
      setError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`container d-flex justify-content-center align-items-center ${styles.formContainer}`}>
      <div className={`${styles.formCard} card shadow p-5`}>
        <h2 className={`${styles.formTitle} text-center mb-4`}>E-PAY</h2>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="CNR" className={`${styles.label} form-label`}>CNR Number</label>
            <input
              type="text"
              id="CNR"
              name="CNR"
              placeholder="Enter CNR number"
              className={`${styles.inputField} form-control`}
              value={formData.CNR}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className={`${styles.label} form-label`}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className={`${styles.inputField} form-control`}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className={`${styles.label} form-label`}>Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              className={`${styles.inputField} form-control`}
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className={`${styles.label} form-label`}>Gender</label>
            <div className="d-flex justify-content-between">
            <div className={`${styles.genderContainer} d-flex`}>
  <div className="form-check">
    <input
      type="radio"
      id="male"
      name="gender"
      value="Male"
      className="form-check-input"
      checked={formData.gender === 'Male'}
      onChange={handleChange}
      required
    />
    <label htmlFor="male" className="form-check-label">Male</label>
  </div>
  <div className="form-check">
    <input
      type="radio"
      id="female"
      name="gender"
      value="Female"
      className="form-check-input"
      checked={formData.gender === 'Female'}
      onChange={handleChange}
      required
    />
    <label htmlFor="female" className="form-check-label">Female</label>
  </div>
</div>

            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="caseRegistrationDate" className={`${styles.label} form-label`}>Date of Case Registration</label>
            <input
              type="date"
              id="caseRegistrationDate"
              name="caseRegistrationDate"
              className={`${styles.inputField} form-control`}
              value={formData.caseRegistrationDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="paymentAmount" className={`${styles.label} form-label`}>Payment Amount</label>
            <input
              type="number"
              id="paymentAmount"
              name="paymentAmount"
              placeholder="Enter payment amount"
              className={`${styles.inputField} form-control`}
              value={formData.paymentAmount}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={`${styles.submitButton} btn btn-dark w-100`}>
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default EpayForm;
