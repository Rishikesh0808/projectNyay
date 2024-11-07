import React, { useState } from "react";
import styles from "./FIRForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const FIRForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    incidentType: "",
    incidentDate: "",
    incidentLocation: "",
    incidentDescription: "",
    policeStation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    try {
      const response = await axios.post("http://localhost:3005/petition", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("acknowledgement_no", response.data);
      navigate("/filed");
    } catch {
      console.log("error occurred");
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      incidentType: "",
      incidentDate: "",
      incidentLocation: "",
      incidentDescription: "",
      policeStation: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formCard}> {/* Card Structure */}
        <h2 className={styles.formTitle}>Online FIR Filing Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className={styles.label}>Full Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`${styles.inputField} form-control`}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className={styles.label}>Email *</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`${styles.inputField} form-control`}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className={styles.label}>Phone *</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`${styles.inputField} form-control`}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="incidentType" className={styles.label}>Incident Type *</label>
            <select
              name="incidentType"
              id="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
              required
              className={`${styles.inputField} form-control`}
            >
              <option value="">-- Select --</option>
              <option value="Theft">Theft</option>
              <option value="Assault">Assault</option>
              <option value="Accident">Accident</option>
              <option value="Fraud">Fraud</option>
              <option value="Domestic Violence">Domestic Violence</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="policeStation" className={styles.label}>Police Station *</label>
            <select
              name="policeStation"
              id="policeStation"
              value={formData.policeStation}
              onChange={handleChange}
              required
              className={`${styles.inputField} form-control`}
            >
              <option value="">-- Select --</option>
              <optgroup label="Adilabad">
                <option value="adilabad1">Adilabad Town Police Station</option>
                <option value="adilabad2">Mancherial Police Station</option>
                <option value="adilabad3">Nirmal Police Station</option>
              </optgroup>
              <optgroup label="Hyderabad">
                <option value="hyderabad1">Hyderabad City Police</option>
                <option value="hyderabad2">Banjara Hills Police Station</option>
                <option value="hyderabad3">Gachibowli Police Station</option>
              </optgroup>
              <optgroup label="Karimnagar">
                <option value="karimnagar1">Karimnagar Town Police Station</option>
                <option value="karimnagar2">Jagtiyal Police Station</option>
                <option value="karimnagar3">Huzurabad Police Station</option>
              </optgroup>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="incidentDate" className={styles.label}>Incident Date *</label>
            <input
              type="date"
              name="incidentDate"
              id="incidentDate"
              value={formData.incidentDate}
              onChange={handleChange}
              required
              className={`${styles.inputField} form-control`}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="incidentLocation" className={styles.label}>Incident Location *</label>
            <input
              type="text"
              name="incidentLocation"
              id="incidentLocation"
              value={formData.incidentLocation}
              onChange={handleChange}
              required
              className={`${styles.inputField} form-control`}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="incidentDescription" className={styles.label}>
              Incident Description (100 words maximum)
            </label>
            <textarea
              name="incidentDescription"
              id="incidentDescription"
              value={formData.incidentDescription}
              onChange={handleChange}
              required
              maxLength={100}
              className={`${styles.inputField} form-control`}
            ></textarea>
          </div>

          <button type="submit" className={`${styles.submitButton} btn btn-dark w-100`}>
            Submit FIR -->
          </button>
        </form>
      </div>
    </div>
  );
};

export default FIRForm;
