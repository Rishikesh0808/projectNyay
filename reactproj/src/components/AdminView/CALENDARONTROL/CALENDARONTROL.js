import React, { useState } from 'react';
import './CALENDARONTROL.css';

const CalendarControl = () => {
  const [calendar, setCalendar] = useState(new Date());
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [yearInput, setYearInput] = useState(calendar.getFullYear());

  const calWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calMonthName = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = () => new Date(calendar.getFullYear(), calendar.getMonth(), 1).getDay();
  const today = new Date();

  const navigateToPreviousMonth = () => setCalendar(new Date(calendar.setMonth(calendar.getMonth() - 1)));
  const navigateToNextMonth = () => setCalendar(new Date(calendar.setMonth(calendar.getMonth() + 1)));
  const navigateToCurrentMonth = () => setCalendar(new Date());

  const selectYear = (year) => {
    setCalendar(new Date(year, calendar.getMonth(), 1));
    setShowYearPicker(false);
  };

  const handleYearInputChange = (e) => setYearInput(e.target.value);

  const handleYearSubmit = () => {
    selectYear(parseInt(yearInput, 10));
  };

  const renderCalendarDays = () => {
    const days = [];
    const firstDay = firstDayOfMonth();
    const totalDays = daysInMonth(calendar.getMonth(), calendar.getFullYear());
    const prevMonthDays = firstDay;

    for (let i = 0; i < prevMonthDays; i++) {
      days.push(<div key={`prev-${i}`} className="calendar-prev-date" />);
    }
    for (let i = 1; i <= totalDays; i++) {
      const isToday = i === today.getDate() &&
                      calendar.getMonth() === today.getMonth() &&
                      calendar.getFullYear() === today.getFullYear();
      days.push(
        <div key={i} className={`calendar-date ${isToday ? 'calendar-today' : ''}`}>
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-inner">
        <div className="calendar-controls">
          <button className="calendar-prev" onClick={navigateToPreviousMonth}>❮</button>
          <div className="calendar-year-month">
            <button onClick={() => setShowYearPicker(true)}>{calendar.getFullYear()}</button>
            <span>{calMonthName[calendar.getMonth()]}</span>
          </div>
          <button className="calendar-next" onClick={navigateToNextMonth}>❯</button>
        </div>

        <div className="calendar-today-date" onClick={navigateToCurrentMonth}>
          Today: {`${calWeekDays[today.getDay()]}, ${today.getDate()} ${calMonthName[today.getMonth()]} ${today.getFullYear()}`}
        </div>

        <div className="calendar-body">
          {calWeekDays.map(day => (
            <div key={day} className="calendar-weekday">{day}</div>
          ))}
          {renderCalendarDays()}
        </div>
      </div>

      {showYearPicker && (
        <div className="year-picker-modal">
          <div className="year-picker">
            <input
              type="number"
              value={yearInput}
              onChange={handleYearInputChange}
              placeholder="Enter year"
            />
            <button onClick={handleYearSubmit}>Go</button>
            <button onClick={() => setShowYearPicker(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarControl;
