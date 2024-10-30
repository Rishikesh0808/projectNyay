import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import styles from './more.module.css'; // Import your CSS module

const More = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" style={{ position: 'relative' }}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Help
      </button>
      {isOpen && (
        <div className={`dropdown-menu show ${styles.dropdownMenu}`} aria-labelledby="dropdownMenuButton">
          <button className={`dropdown-item ${styles.dropdownItem}`} onClick={() => console.log('Private Lawyers Clicked')}>
            Private Lawyers
          </button>
          <button className={`dropdown-item ${styles.dropdownItem}`} onClick={() => console.log('Contact Us Clicked')}>
            Contact Us
          </button>
          <button className={`dropdown-item ${styles.dropdownItem}`} onClick={() => console.log('Support Clicked')}>
            Support
          </button>
        </div>
      )}
    </div>
  );
};

export default More;
