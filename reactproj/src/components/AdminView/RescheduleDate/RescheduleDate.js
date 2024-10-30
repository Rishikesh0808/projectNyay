import React, { useState } from "react";
import styles from "./RescheduleDate.module.css"; // Assuming modular CSS styling
import CalendarControl from "../CALENDARONTROL/CALENDARONTROL";

const RescheduleDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Handles date selection logic
  const handleDateChange = (event) => {
    const dateValue = new Date(event.target.value);
    setSelectedDate(dateValue);
  };

  return (
    <div className={styles.calendarContainer}>
      <h2>Reschedule Case Hearing</h2>
      <CalendarControl/>
      
    
      
      <div className={styles.dateDisplay}>
        <p>New Hearing Date: {selectedDate.toDateString()}</p>
      </div>
    </div>
  );
};

export default RescheduleDate;

