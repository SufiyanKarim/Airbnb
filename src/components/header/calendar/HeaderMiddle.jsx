import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import SearchBar from './SearchBar';
import DateTabs from './DateTabs';
import Calendar from './Calendar';

const HeaderMiddle = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false); // Manage calendar visibility

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  // Callback to show or hide the calendar
  const toggleCalendar = (isVisible) => {
    setShowCalendar(isVisible);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar toggleCalendar={toggleCalendar} />

      {showCalendar && (
      <div>
      <DateTabs />
        <Calendar
          currentMonth={currentMonth}
          onNextMonth={handleNextMonth}
          onPrevMonth={handlePrevMonth}
        />
      </div>
      )}
    </div>
  );
};

export default HeaderMiddle;
