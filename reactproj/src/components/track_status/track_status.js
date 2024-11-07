import React, { useState } from "react";
import styles from "./track_status.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Track_status = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Plaintiff: "",
    district: "",
    courtDetails: "",
    caseNumber: "",
    filingDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");

    try {
      await axios.get("http://localhost:3005/tracks", {
        params: { caseNumber: formData.caseNumber },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/case/${formData.caseNumber}`);
    } catch {
      console.log("Error occurred");
    }
  };

  return (
    <div className={styles.Main}>
      <div className={`${styles.card} card`}>
        <h2 className={styles.formTitle}> Track Case Status</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="court" className={styles.label}>Court</label>
            <select
              name="courtDetails"
              id="court"
              value={formData.courtDetails}
              onChange={handleChange}
              className={`form-select ${styles.select}`}
              required
            >
              <option value="">-- Select --</option>
              <optgroup label="Adilabad">
                <option value="Adilabad Criminal Court">Adilabad Criminal Court</option>
                <option value="Adilabad Civil Court">Adilabad Civil Court</option>
              </optgroup>
              <optgroup label="Bhadradri Kothagudem">
                <option value="Kothagudem Criminal Court">Kothagudem Criminal Court</option>
                <option value="Kothagudem Civil Court">Kothagudem Civil Court</option>
              </optgroup>
              <optgroup label="Hyderabad">
                <option value="Hyderabad City Criminal Court">Hyderabad City Criminal Court</option>
                <option value="Hyderabad City Civil Court">Hyderabad City Civil Court</option>
              </optgroup>
              <optgroup label="Jagtial">
                <option value="Jagtial Criminal Court">Jagtial Criminal Court</option>
                <option value="Jagtial Civil Court">Jagtial Civil Court</option>
              </optgroup>
              <optgroup label="Jangaon">
                <option value="Jangaon Criminal Court">Jangaon Criminal Court</option>
                <option value="Jangaon Civil Court">Jangaon Civil Court</option>
              </optgroup>
              <optgroup label="Jayashankar Bhupalpally">
                <option value="Bhupalpally Criminal Court">Bhupalpally Criminal Court</option>
                <option value="Bhupalpally Civil Court">Bhupalpally Civil Court</option>
              </optgroup>
              <optgroup label="Jogulamba Gadwal">
                <option value="Gadwal Criminal Court">Gadwal Criminal Court</option>
                <option value="Gadwal Civil Court">Gadwal Civil Court</option>
              </optgroup>
              <optgroup label="Kamareddy">
                <option value="Kamareddy Criminal Court">Kamareddy Criminal Court</option>
                <option value="Kamareddy Civil Court">Kamareddy Civil Court</option>
              </optgroup>
              <optgroup label="Karimnagar">
                <option value="Karimnagar Criminal Court">Karimnagar Criminal Court</option>
                <option value="Karimnagar Civil Court">Karimnagar Civil Court</option>
              </optgroup>
              <optgroup label="Khammam">
                <option value="Khammam Criminal Court">Khammam Criminal Court</option>
                <option value="Khammam Civil Court">Khammam Civil Court</option>
              </optgroup>
              <optgroup label="Komaram Bheem Asifabad">
                <option value="Asifabad Criminal Court">Asifabad Criminal Court</option>
                <option value="Asifabad Civil Court">Asifabad Civil Court</option>
              </optgroup>
              <optgroup label="Mahabubabad">
                <option value="Mahabubabad Criminal Court">Mahabubabad Criminal Court</option>
                <option value="Mahabubabad Civil Court">Mahabubabad Civil Court</option>
              </optgroup>
              <optgroup label="Mahbubnagar">
                <option value="Mahbubnagar Criminal Court">Mahbubnagar Criminal Court</option>
                <option value="Mahbubnagar Civil Court">Mahbubnagar Civil Court</option>
              </optgroup>
              <optgroup label="Mancherial">
                <option value="Mancherial Criminal Court">Mancherial Criminal Court</option>
                <option value="Mancherial Civil Court">Mancherial Civil Court</option>
              </optgroup>
              <optgroup label="Medak">
                <option value="Medak Criminal Court">Medak Criminal Court</option>
                <option value="Medak Civil Court">Medak Civil Court</option>
              </optgroup>
              <optgroup label="Medchal-Malkajgiri">
                <option value="Medchal Criminal Court">Medchal Criminal Court</option>
                <option value="Malkajgiri Civil Court">Malkajgiri Civil Court</option>
              </optgroup>
              <optgroup label="Mulugu">
                <option value="Mulugu Criminal Court">Mulugu Criminal Court</option>
                <option value="Mulugu Civil Court">Mulugu Civil Court</option>
              </optgroup>
              <optgroup label="Nagarkurnool">
                <option value="Nagarkurnool Criminal Court">Nagarkurnool Criminal Court</option>
                <option value="Nagarkurnool Civil Court">Nagarkurnool Civil Court</option>
              </optgroup>
              <optgroup label="Nalgonda">
                <option value="Nalgonda Criminal Court">Nalgonda Criminal Court</option>
                <option value="Nalgonda Civil Court">Nalgonda Civil Court</option>
              </optgroup>
              <optgroup label="Narayanpet">
                <option value="Narayanpet Criminal Court">Narayanpet Criminal Court</option>
                <option value="Narayanpet Civil Court">Narayanpet Civil Court</option>
              </optgroup>
              <optgroup label="Nirmal">
                <option value="Nirmal Criminal Court">Nirmal Criminal Court</option>
                <option value="Nirmal Civil Court">Nirmal Civil Court</option>
              </optgroup>
              <optgroup label="Nizamabad">
                <option value="Nizamabad Criminal Court">Nizamabad Criminal Court</option>
                <option value="Nizamabad Civil Court">Nizamabad Civil Court</option>
              </optgroup>
              <optgroup label="Peddapalli">
                <option value="Peddapalli Criminal Court">Peddapalli Criminal Court</option>
                <option value="Peddapalli Civil Court">Peddapalli Civil Court</option>
              </optgroup>
              <optgroup label="Rajanna Sircilla">
                <option value="Sircilla Criminal Court">Sircilla Criminal Court</option>
                <option value="Sircilla Civil Court">Sircilla Civil Court</option>
              </optgroup>
              <optgroup label="Rangareddy">
                <option value="Rangareddy District Criminal Court">Rangareddy District Criminal Court</option>
                <option value="Rangareddy District Civil Court">Rangareddy District Civil Court</option>
              </optgroup>
              <optgroup label="Sangareddy">
                <option value="Sangareddy Criminal Court">Sangareddy Criminal Court</option>
                <option value="Sangareddy Civil Court">Sangareddy Civil Court</option>
              </optgroup>
              <optgroup label="Siddipet">
                <option value="Siddipet Criminal Court">Siddipet Criminal Court</option>
                <option value="Siddipet Civil Court">Siddipet Civil Court</option>
              </optgroup>
              <optgroup label="Suryapet">
                <option value="Suryapet Criminal Court">Suryapet Criminal Court</option>
                <option value="Suryapet Civil Court">Suryapet Civil Court</option>
              </optgroup>
              <optgroup label="Vikarabad">
                <option value="Vikarabad Criminal Court">Vikarabad Criminal Court</option>
                <option value="Vikarabad Civil Court">Vikarabad Civil Court</option>
              </optgroup>
              <optgroup label="Wanaparthy">
                <option value="Wanaparthy Criminal Court">Wanaparthy Criminal Court</option>
                <option value="Wanaparthy Civil Court">Wanaparthy Civil Court</option>
              </optgroup>
              <optgroup label="Warangal Urban">
                <option value="Warangal Criminal Court">Warangal Criminal Court</option>
                <option value="Warangal Civil Court">Warangal Civil Court</option>
              </optgroup>
              <optgroup label="Warangal Rural">
                <option value="Warangal Rural Criminal Court">Warangal Rural Criminal Court</option>
                <option value="Warangal Rural Civil Court">Warangal Rural Civil Court</option>
              </optgroup>
              <optgroup label="Yadadri Bhuvanagiri">
                <option value="Bhuvanagiri Criminal Court">Bhuvanagiri Criminal Court</option>
                <option value="Bhuvanagiri Civil Court">Bhuvanagiri Civil Court</option>
              </optgroup>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="Plaintiff" className={styles.label}>Plaintiff:</label>
            <input
              type="text"
              name="Plaintiff"
              id="Plaintiff"
              value={formData.Plaintiff}
              onChange={handleChange}
              className={`form-control ${styles.inputText}`}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="caseNumber" className={styles.label}>Case Number:</label>
            <input
              type="text"
              name="caseNumber"
              id="caseNumber"
              value={formData.caseNumber}
              onChange={handleChange}
              className={`form-control ${styles.inputText}`}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="filingDate" className={styles.label}>Filing Date:</label>
            <input
              type="date"
              name="filingDate"
              id="filingDate"
              value={formData.filingDate}
              onChange={handleChange}
              className={`form-control ${styles.inputDate}`}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Submit <span className={styles.arrowIcon}>&#8594;</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Track_status;
