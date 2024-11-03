import React, { useState } from 'react';
import axios from'axios';
import styles from './CheckAcknowledgement.module.css'

const CheckAcknowledgment = () => {
    const [acknowledgment_no, setAcknowledgment_No] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!acknowledgment_no) {
            setStatusMessage('Please enter an acknowledgment number.');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3005/check/${acknowledgment_no}`);
            const data = await response.data
          setStatusMessage(data === 'new' ? "YOUR APPLICATION HAS NOT BEEN NOTED YET" : "YOUR APPLICATION HAS BEEN NOTED");
            
        } catch (error) {
            console.error("Error fetching status:", error);
            setStatusMessage("An error occurred while checking the acknowledgment number.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.heading}>Check Acknowledgment Status</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                <input 
    type="text" 
    className={styles.inputField} 
    value={acknowledgment_no} 
    onChange={(e) => setAcknowledgment_No(e.target.value)} 
    placeholder="Enter Acknowledgment Number" 
    style={{
        width: "650px", 
        marginBottom: "15px", 
        borderRadius: "5px",      // Rounded corners
        padding: "10px 15px",     // Padding for better spacing
        border: "1px solid #ccc",  // Light gray border
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        fontSize: "16px",         // Slightly larger font size
        outline: "none",          // Remove default outline
        transition: "border-color 0.3s ease", // Transition for interaction
    }} 
/>

                    <button 
    className={styles.submitButton} 
    style={{
        width: "100px",               // Same width as the input field
        padding: "10px 15px",        // Comfortable padding
        borderRadius: "5px",         // Rounded corners
        border: "1px solid #007BFF", // Border with a primary color
        backgroundColor: "black",  // Primary button color
        color: "#fff",                // White text for contrast
        fontSize: "16px",             // Consistent font size
        cursor: "pointer",            // Pointer cursor on hover
        transition: "background-color 0.3s ease, border-color 0.3s ease", // Smooth transitions
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
        outline: "none",              // Remove default outline
    }} onClick={handleSubmit}>
    Submit
</button>

                </form>
                {statusMessage && (
                    <p className={styles.statusMessage}>{statusMessage}</p>
                )}
            </div>
        </div>
    );
};


export default CheckAcknowledgment;

