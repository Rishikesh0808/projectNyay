import React, { useState } from "react";
import styles from "./FIRForm.module.css"; // Importing the modular CSS file
import axios from "axios"
import { useNavigate } from "react-router-dom";

const FIRForm = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    incidentType: "",
    incidentDate: "",
    incidentLocation: "",
    incidentDescription: "",
    policeStation: "", // New field for police station
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission (could be replaced with an API call)
    
    console.log(formData);
    const token=localStorage.getItem('jwt')
    try{
      const prom=await axios.post('http://localhost:3005/petition',formData,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
      localStorage.setItem('acknowledgement_no',prom.data);
      navigate('/filed');
    }
    catch{
      console.log("error occured");
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      incidentType: "",
      incidentDate: "",
      incidentLocation: "",
      incidentDescription: "",
      policeStation: "", // Reset the new field
    });

  };

  return (
    <div className={styles.formContainer}>
      <h2>Online FIR Filing Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="incidentType">Incident Type:</label>
          <select
            name="incidentType"
            id="incidentType"
            value={formData.incidentType}
            onChange={handleChange}
            required
          >
            <option value="">-- Select --</option>
            <option value="Theft">Theft</option>
            <option value="Assault">Assault</option>
            <option value="Accident">Accident</option>
            <option value="Fraud">Fraud</option>
            <option value="Domestic Violence">Domestic Violence</option>
            <option value="Cybercrime">Cybercrime</option>
            <option value="Vandalism">Vandalism</option>
            <option value="Harassment">Harassment</option>
            <option value="Kidnapping">Kidnapping</option>
            <option value="Murder">Murder</option>
            <option value="Burglary">Burglary</option>
            <option value="Robbery">Robbery</option>
            <option value="Sexual Assault">Sexual Assault</option>
            <option value="Arson">Arson</option>
            <option value="Child Abuse">Child Abuse</option>
            <option value="Human Trafficking">Human Trafficking</option>
            <option value="Stalking">Stalking</option>
            <option value="Drug Possession">Drug Possession</option>
            <option value="Illegal Weapons">Illegal Weapons</option>
            <option value="Blackmail">Blackmail</option>
            <option value="Extortion">Extortion</option>
            <option value="Money Laundering">Money Laundering</option>
            <option value="Bribery">Bribery</option>
            <option value="Riot">Riot</option>
            <option value="Attempted Murder">Attempted Murder</option>
            <option value="Trespassing">Trespassing</option>
            <option value="Hit and Run">Hit and Run</option>
            <option value="Corruption">Corruption</option>
            <option value="Forgery">Forgery</option>
            <option value="Public Nuisance">Public Nuisance</option>
            <option value="Terrorism">Terrorism</option>
            <option value="Animal Cruelty">Animal Cruelty</option>
            <option value="Hate Crime">Hate Crime</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="policeStation">Police Station:</label>
          <select
            name="policeStation"
            id="policeStation"
            value={formData.policeStation}
            onChange={handleChange}
            required
          >
            <option value="">-- Select --</option>
            {/* List of Police Stations for each District */}
            <optgroup label="Adilabad">
              <option value="Adilabad Town">Adilabad Town</option>
              <option value="Mancherial">Mancherial</option>
            </optgroup>
            <optgroup label="Hyderabad">
              <option value="Banjara Hills">Banjara Hills</option>
              <option value="Madhapur">Madhapur</option>
            </optgroup>
            <optgroup label="Karimnagar">
              <option value="Karimnagar Town">Karimnagar Town</option>
              <option value="Huzurabad">Huzurabad</option>
            </optgroup>
            <optgroup label="Khammam">
              <option value="Khammam Town">Khammam Town</option>
              <option value="Paloncha">Paloncha</option>
            </optgroup>
            <optgroup label="Mahbubnagar">
              <option value="Mahbubnagar Town">Mahbubnagar Town</option>
              <option value="Shadnagar">Shadnagar</option>
            </optgroup>
            <optgroup label="Medchal-Malkajgiri">
              <option value="Medchal">Medchal</option>
              <option value="Keesara">Keesara</option>
            </optgroup>
            <optgroup label="Nalgonda">
              <option value="Nalgonda Town">Nalgonda Town</option>
              <option value="Suryapet">Suryapet</option>
            </optgroup>
            <optgroup label="Nizamabad">
              <option value="Nizamabad Town">Nizamabad Town</option>
              <option value="Bheempur">Bheempur</option>
            </optgroup>
            <optgroup label="Peddapalli">
              <option value="Peddapalli">Peddapalli</option>
              <option value="Ramagundam">Ramagundam</option>
            </optgroup>
            <optgroup label="Rangareddy">
              <option value="LB Nagar">LB Nagar</option>
              <option value="Madhapur">Madhapur</option>
            </optgroup>
            <optgroup label="Siddipet">
              <option value="Siddipet">Siddipet</option>
              <option value="Gajwel">Gajwel</option>
            </optgroup>
            <optgroup label="Vikarabad">
              <option value="Vikarabad">Vikarabad</option>
              <option value="Daregaon">Daregaon</option>
            </optgroup>
            <optgroup label="Warangal Urban">
              <option value="Warangal Fort">Warangal Fort</option>
              <option value="Kazipet">Kazipet</option>
            </optgroup>
            <optgroup label="Warangal Rural">
              <option value="Hanamkonda">Hanamkonda</option>
              <option value="Narmetta">Narmetta</option>
            </optgroup>
            <optgroup label="Yadadri Bhuvanagiri">
              <option value="Yadagirigutta">Yadagirigutta</option>
              <option value="Bhuvanagiri">Bhuvanagiri</option>
            </optgroup>
            <optgroup label="Jagtiyal">
              <option value="Jagtiyal">Jagtiyal</option>
              <option value="Jagtial Town">Jagtial Town</option>
            </optgroup>
            <optgroup label="Jangaon">
              <option value="Jangaon">Jangaon</option>
              <option value="Palakurthy">Palakurthy</option>
            </optgroup>
            <optgroup label="Mulugu">
              <option value="Mulugu">Mulugu</option>
              <option value="Govindaraopet">Govindaraopet</option>
            </optgroup>
            <optgroup label="Medak">
              <option value="Medak">Medak</option>
              <option value="Siddipet">Siddipet</option>
            </optgroup>
            <optgroup label="Kamareddy">
              <option value="Kamareddy">Kamareddy</option>
              <option value="Brahmanpally">Brahmanpally</option>
            </optgroup>
            <optgroup label="Nagarkurnool">
              <option value="Nagarkurnool">Nagarkurnool</option>
              <option value="Achampet">Achampet</option>
            </optgroup>
            <optgroup label="Medchal">
              <option value="Medchal">Medchal</option>
              <option value="Malkajgiri">Malkajgiri</option>
            </optgroup>
            <optgroup label="Peddapalli">
              <option value="Peddapalli">Peddapalli</option>
              <option value="Ramagundam">Ramagundam</option>
            </optgroup>
            <optgroup label="Mahbubnagar">
              <option value="Mahbubnagar">Mahbubnagar</option>
              <option value="Shadnagar">Shadnagar</option>
            </optgroup>
            <optgroup label="Nalgonda">
              <option value="Nalgonda">Nalgonda</option>
              <option value="Suryapet">Suryapet</option>
            </optgroup>
            <optgroup label="Nizamabad">
              <option value="Nizamabad">Nizamabad</option>
              <option value="Bheempur">Bheempur</option>
            </optgroup>
            <optgroup label="Siddipet">
              <option value="Siddipet">Siddipet</option>
              <option value="Gajwel">Gajwel</option>
            </optgroup>
            <optgroup label="Jagityal">
              <option value="Jagityal">Jagityal</option>
              <option value="Jagtial Town">Jagtial Town</option>
            </optgroup>
            <optgroup label="Warangal Rural">
              <option value="Warangal Rural">Warangal Rural</option>
              <option value="Narmetta">Narmetta</option>
            </optgroup>
            <optgroup label="Warangal Urban">
              <option value="Warangal Urban">Warangal Urban</option>
              <option value="Kazipet">Kazipet</option>
            </optgroup>
            <optgroup label="Khammam">
              <option value="Khammam">Khammam</option>
              <option value="Paloncha">Paloncha</option>
            </optgroup>
            <optgroup label="Adilabad">
              <option value="Adilabad">Adilabad</option>
              <option value="Mancherial">Mancherial</option>
            </optgroup>
            <optgroup label="Hyderabad">
              <option value="Hyderabad">Hyderabad</option>
              <option value="Banjara Hills">Banjara Hills</option>
            </optgroup>
            <optgroup label="Rangareddy">
              <option value="Rangareddy">Rangareddy</option>
              <option value="LB Nagar">LB Nagar</option>
            </optgroup>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="incidentDate">Incident Date:</label>
          <input
            type="date"
            name="incidentDate"
            id="incidentDate"
            value={formData.incidentDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="incidentLocation">Incident Location:</label>
          <input
            type="text"
            name="incidentLocation"
            id="incidentLocation"
            value={formData.incidentLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="incidentDescription">
            Incident Description (100 words maximum):
          </label>
          <textarea
            name="incidentDescription"
            id="incidentDescription"
            value={formData.incidentDescription}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit FIR</button>
      </form>
    </div>
  );
};

export default FIRForm;
