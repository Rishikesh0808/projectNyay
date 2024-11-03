// AddLawyers.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './addLawyers.module.css';
import axios from 'axios';

const AddLawyers = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [jurisdiction, setJurisdiction] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/addLawyers', { name, type, jurisdiction, phone, email });
      console.log(response.data.message);
      setMessage('Lawyer added successfully!');
      setName('');
      setType('');
      setJurisdiction('');
      setPhone('');
      setEmail('');
    } catch (error) {
      setMessage('Failed to add lawyer. Please try again.');
    }
  };

  return (
    <div className={`d-flex align-items-center justify-content-center ${styles.formContainer}`}>
      <form onSubmit={handleSubmit} className={`${styles.card} p-4`}>
        <h2 className="text-center text-black">Add Lawyer</h2>

        {message && <div className="alert alert-info">{message}</div>}

        <div className="mb-3">
          <label htmlFor="name" className="form-label text-black">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label text-black">Type</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="jurisdiction" className="form-label text-black">Choice Of Jurisdiction</label>
          <input
            type="text"
            id="jurisdiction"
            value={jurisdiction}
            onChange={(e) => setJurisdiction(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label text-black">Phone</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-black">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">Add Lawyer</button>
      </form>
    </div>
  );
};

export default AddLawyers;
