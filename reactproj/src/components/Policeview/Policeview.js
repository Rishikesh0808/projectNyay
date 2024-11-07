import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Policeview.module.css';
import axios from 'axios';

const Policeview = () => {
  const [dummyData, setDummyData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNote = async (acknowledgement_no) => {
    try { console.log(acknowledgement_no);
      const response = await axios.put(`http://localhost:3005/noting/${acknowledgement_no}`);
      console.log(response.data);

      if(response.status==='200')
        setSelectedItem(null);
      alert("NOTED SUCCESFULLY")
    } 
    catch {
      console.log("Failed to note the petition.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3005/getPetitions");
        if (Array.isArray(response.data)) {
          setDummyData(response.data);
        } else {
          console.warn("Unexpected data format:", response.data);
          setDummyData([selectedItem]);
        }
      } catch (error) {
        console.error("Error fetching petitions:", error);
      }
    };
    fetchData();
  }, [selectedItem]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dummyData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dummyData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCardClick = () => {
    setSelectedItem(dummyData[currentIndex]);
  };

  return (
    <div className="container">
      {!selectedItem ? (
        <>
          <h1 className="text-center my-4" style={{ color: 'black' }}>VIEW PETITION</h1>
          <div className={`${styles.carouselContainer} d-flex justify-content-center align-items-center`}>
            <button className={`${styles.arrowButton} btn btn-outline-secondary mx-2`} onClick={handlePrev}>
              <i className="bi bi-arrow-left"></i>
            </button>

            <div className={`${styles.card}`} onClick={handleCardClick}>
              {dummyData.length > 0 ? (
                <>
                  <h3>{dummyData[currentIndex].name}</h3>
                  <h3>{dummyData[currentIndex].acknowledgement_no}</h3>
                </>
              ) : (
                <p>No petitions available.</p>
              )}
            </div>

            <button className={`${styles.arrowButton} btn btn-outline-secondary mx-2`} onClick={handleNext}>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          
        </>
      ) : (
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 col-lg-6">
            <div className="card p-4 shadow-lg">
              <h3 className="text-center mb-4">Petition Details</h3>
              <table className="table table-bordered">
                <tbody>
                  {Object.entries(selectedItem)
                    .filter(([key]) => key !== '__v' && key !== '_id')
                    .map(([key, value]) => (
                      <tr key={key}>
                        <th scope="row" className="text-capitalize">{key}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="text-center">
                <button className="btn btn-primary mt-4" onClick={() => handleNote(selectedItem.acknowledgement_no)}>
                  Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Policeview;
