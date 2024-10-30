// AddPoliceOfficerForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AddPoliceOfficerForm.module.css'; // Importing CSS module
import axios from "axios"
const AddPoliceOfficerForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''

  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp=await axios.post("http://localhost:3005/addpolice",formData);
      console.log(resp.data)
       if(resp.status===201)
       {
        alert("Police Officer Has Been Registered");
       }
      setFormData({ username: '', password: '', email: '' });
    } catch (error) {
      setMessage('Failed to add police officer. Please try again.');
    }
  };

  return (
    <div className={`d-flex align-items-center justify-content-center ${styles.formContainer}`}>
      <form onSubmit={handleSubmit} className={`${styles.card} p-4`}>
        <h2 className="text-center" style={{ color: 'black' }}>Add Police Officer</h2>

        {message && <div className="alert alert-info">{message}</div>}

        <div className="mb-3">
          <label htmlFor="username" className="form-label" style={{ color: 'black' }}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label" style={{ color: 'black' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ color: 'black' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-dark w-100" >Add Police Officer</button>
      </form>
    </div>
  );
};

export default AddPoliceOfficerForm;
