import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AddFines.module.css'; // Importing CSS module
import axios from "axios";

const AddFines = () => {
  const [formData, setFormData] = useState({
    cnr: '',
    name: '',
    age: '',
    gender: '',
    date: '',
    fine: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3005/addpolice", formData);
      if (response.status === 201) {
        alert("Police Officer has been registered successfully!");
        setFormData({ cnr: '', name: '', age: '', gender: '', date: '', fine: '' });
      }
    } catch (error) {
      setMessage('Failed to add police officer. Please try again.');
    }
  };

  return (
    <div className={`d-flex align-items-center justify-content-center ${styles.formContainer}`}>
      <form onSubmit={handleSubmit} className={`${styles.card} p-4`}>
        <h2 className="text-center" style={{ color: 'black' }}>Add Court Fine</h2>

        {message && <div className="alert alert-info">{message}</div>}

        <div className="mb-3">
          <label htmlFor="cnr" className="form-label" style={{ color: 'black' }}>CNR</label>
          <input
            type="text"
            id="cnr"
            name="cnr"
            className="form-control"
            value={formData.cnr}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ color: 'black' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label" style={{ color: 'black' }}>Age</label>
          <input
            type="number"
            id="age"
            name="age"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label" style={{ color: 'black' }}>Gender</label>
          <select
            id="gender"
            name="gender"
            className="form-control"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label" style={{ color: 'black' }}>Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fine" className="form-label" style={{ color: 'black' }}>Fine</label>
          <input
            type="number"
            id="fine"
            name="fine"
            className="form-control"
            value={formData.fine}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">Add Police Officer</button>
      </form>
    </div>
  );
};

export default AddFines;
