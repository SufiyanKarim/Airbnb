import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import AddToCart from "./cart/AddToCart";

const SearchBar = ({ toggleCalendar }) => {
  const [activeField, setActiveField] = useState(null);
  const [showDateTabs, setShowDateTabs] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [experience, setExperience] = useState(false); // track experience state
  const [stays, setStays] = useState(true); // track stays state

  const handleClick = (field) => {
    setActiveField(field);
    if (field === "checkIn" || field === "checkOut") {
      setShowDateTabs(true);
      toggleCalendar(true); // Show Calendar when "Check in" or "Check out" is clicked
    } else {
      setShowDateTabs(false);
      toggleCalendar(false); // Hide Calendar when "Where" or "Who" is clicked
    }
  };

  const handleShowGuests = () => {
    setShowGuests(!showGuests);
  };

  const handleStays = () => {
    setStays(true);
    setExperience(false);
  };

  const handleExperience = () => {
    setExperience(true);
    setStays(false);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-10 font-sans">
      <div className="flex space-x-6">
        <h1
          className={`cursor-pointer font-semibold `}
          onClick={handleStays}
        >
          Stays
        </h1>
        <h1
          className={`cursor-pointer font-semibold `}
          onClick={handleExperience}
        >
          Experiences
        </h1>
      </div>

      <div className="flex justify-between mt-2 w-full bg-slate-100 border border-gray-400 shadow-xl rounded-full">
        {/* "Where" Input */}
        <div
          className={`flex flex-col p-3 cursor-pointer rounded-full ${activeField === "where" ? "bg-white text-black" : "hover:bg-gray-300"}`}
          onClick={() => handleClick("where")}
        >
          <p>Where</p>
          <input type="text" placeholder="Search destinations" className="outline-none border-none font-normal bg-transparent" />
        </div>

        {/* Check In and Check Out - Visible only if stays is active */}
        {stays && (
          <>
            <div
              className={`flex flex-col p-3 rounded-full w-40 cursor-pointer ${activeField === "checkIn" ? "bg-white text-black" : "hover:bg-gray-300"}`}
              onClick={() => handleClick("checkIn")}
            >
              <p>Check in</p>
              <p>Add dates</p>
            </div>

            <div
              className={`flex flex-col p-3 rounded-full w-40 cursor-pointer ${activeField === "checkOut" ? "bg-white text-black" : "hover:bg-gray-300"}`}
              onClick={() => handleClick("checkOut")}
            >
              <p>Check out</p>
              <p>Add dates</p>
            </div>
          </>
        )}

        {/* Date - Visible only if experience is active */}
        {experience && (
          <div
            className={`flex flex-col p-3 rounded-full w-40 cursor-pointer ${activeField === "date" ? "bg-white text-black" : "hover:bg-gray-300"}`}
            onClick={() => handleClick("date")}
          >
            <p>Date</p>
            <p>Add dates</p>
          </div>
        )}

        {/* "Who" Input */}
        <div
          className={`flex justify-between items-center cursor-pointer p-3 gap-6 rounded-full ${activeField === "who" ? "bg-white text-black" : "hover:bg-gray-300"}`}
          onClick={() => handleClick("who")}
        >
          <div className="flex flex-col" onClick={handleShowGuests}>
            <p>Who</p>
            <p>Add guests</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer bg-[#FB355C] p-2 rounded-lg text-white">
            <MdSearch className="text-2xl" />
            <p className="ml-2 font-semibold">Search</p>
          </div>
        </div>
      </div>

      {/* Guests input */}
      {showGuests && <AddToCart />}
    </div>
  );
};

export default SearchBar;
