import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import styles from './Policeview2.module.css';

const Policeview2 = () => {
  const [acknowledgmentNo, setAcknowledgmentNo] = useState('');
  const [caseDetails, setCaseDetails] = useState(null);
  const [error, setError] = useState('');

  const handleRetrieve = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.get(`http://localhost:3005/retrieve/${acknowledgmentNo}`);
      setCaseDetails(response.data);
    } catch (err) {
      setError('Failed to retrieve case. Please check the acknowledgment number.');
      console.error(err);
    }
  };

  return (
    <div className={`${styles.Policeview2} d-flex flex-column align-items-center justify-content-center`}>
      <h1 className="text-center" style={{ color: 'black' }}>Retrieve Filed Case</h1>
      <form onSubmit={handleRetrieve} className="mt-4">
        <div className="mb-3">
          <label htmlFor="acknowledgmentNo" className="form-label" style={{ color: 'black' }}>Acknowledgment No:</label>
          <input
            type="text"
            id="acknowledgmentNo"
            className="form-control"
            value={acknowledgmentNo}
            onChange={(e) => setAcknowledgmentNo(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'black' }}>Retrieve Case</button>
      </form>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {caseDetails && (
        <div className="mt-4">
          <h3>Case Details:</h3>
          <table className="table table-bordered">
            <tbody>
              {Object.entries(caseDetails)
                .filter(([key]) => key !== '__v' && key !== '_id')
                .map(([key, value]) => (
                  <tr key={key}>
                    <th scope="row" className="text-capitalize">{key.replace(/_/g, ' ')}</th>
                    <td>{typeof value === 'object' ? JSON.stringify(value) : value.toString()}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Policeview2;
