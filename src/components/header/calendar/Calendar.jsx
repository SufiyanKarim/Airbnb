import React from "react";
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";

import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

const Calendar = ({ currentMonth, onNextMonth, onPrevMonth }) => {
  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button onClick={onPrevMonth} className="text-gray-500 text-4xl">
          <IoMdArrowDropleft />
        </button>
        <span className="text-lg font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <button onClick={onNextMonth} className="text-gray-500 text-4xl">
         <IoMdArrowDropright />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center font-medium" key={i}>
          {format(addDays(startDate, i), "EEE")}
        </div>
      );
    }
    return <div className="grid grid-cols-7 gap-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;

        days.push(
          <div
            className={`p-2 text-center cursor-pointer rounded-lg ${
              !isSameMonth(day, monthStart)
                ? "text-gray-400"
                : "text-gray-900"
            } ${
              isSameDay(day, new Date())
                ? "bg-pink-500 text-white"
                : "hover:bg-gray-200"
            }`}
            key={day}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-2 mb-2" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="p-4  w-[100%] rounded-lg shadow-2xl">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
