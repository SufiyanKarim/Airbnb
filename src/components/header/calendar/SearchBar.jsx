import React, { useContext, useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import AddToCart from "./cart/AddToCart";
import { PagesContext } from "../../../context/PagesContext";
import LocationPage from "../../../pages/LocationPage";

const SearchBar = ({ toggleCalendar }) => {
  const { handleCountGuests } = useContext(PagesContext);
  const [activeField, setActiveField] = useState(null);
  const [showDateTabs, setShowDateTabs] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [experience, setExperience] = useState(false);
  const [stays, setStays] = useState(true);
  const [openLocation, setOpenLocation] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".active-section")) {
        // If the click is outside any active section, reset all states
        setActiveField(null);
        setShowGuests(false);
        setShowDateTabs(false);
        setOpenLocation(false);
        toggleCalendar(false);
      }
    };

    // Add event listener to the whole window
    window.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [toggleCalendar]);

  const handleClick = (field) => {
    setActiveField(field);
    if (field === "checkIn" || field === "checkOut" || field === "date") {
      setShowDateTabs(true);
      setShowGuests(false);
      setOpenLocation(false);
      toggleCalendar(true);
    } else {
      setShowDateTabs(false);
      toggleCalendar(false);
    }
  };

  const handleShowGuests = () => {
    setShowGuests(true);
    setShowDateTabs(false);
    setOpenLocation(false);
  };

  const handleStays = () => {
    setStays(true);
    setExperience(false);
  };

  const handleExperience = () => {
    setExperience(true);
    setStays(false);
  };

  const handleOpenLocation = () => {
    setOpenLocation(true);
    setShowGuests(false);
    setShowDateTabs(false);
    toggleCalendar(false);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-10 font-sans active-section">
      <div className="flex space-x-6">
        <h1 className={`cursor-pointer font-semibold`} onClick={handleStays}>
          Stays
        </h1>
        <h1 className={`cursor-pointer font-semibold`} onClick={handleExperience}>
          Experiences
        </h1>
      </div>

      <div className="flex justify-between mt-2 w-[70%] bg-slate-100 border border-gray-400 shadow-xl rounded-full active-section">
        {/* "Where" Input */}
        <div
          className={`flex flex-col p-3 cursor-pointer rounded-full ${
            activeField === "where" ? "bg-white text-black" : "hover:bg-gray-300"
          }`}
          onClick={() => handleClick("where")}
        >
          <div onClick={handleOpenLocation}>
            <p>Where</p>
            <input
              type="text"
              placeholder="Search destinations"
              className="outline-none border-none font-normal bg-transparent"
            />
          </div>
        </div>

        {/* Check In and Check Out - Visible only if stays is active */}
        {stays && (
          <>
            <div
              className={`flex flex-col p-3 rounded-full w-40 cursor-pointer ${
                activeField === "checkIn" ? "bg-white text-black" : "hover:bg-gray-300"
              }`}
              onClick={() => handleClick("checkIn")}
            >
              <p>Check in</p>
              <p>Add dates</p>
            </div>

            <div
              className={`flex flex-col p-3 rounded-full w-40 cursor-pointer ${
                activeField === "checkOut" ? "bg-white text-black" : "hover:bg-gray-300"
              }`}
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
            className={`flex flex-col p-3 rounded-full w-40 cursor-pointer ${
              activeField === "date" ? "bg-white text-black" : "hover:bg-gray-300"
            }`}
            onClick={() => handleClick("date")}
          >
            <p>Date</p>
            <p>Add dates</p>
          </div>
        )}

        {/* "Who" Input */}
        <div
          className={`flex justify-between items-center cursor-pointer p-3 gap-6 rounded-full ${
            activeField === "who" ? "bg-white text-black" : "hover:bg-gray-300"
          }`}
          onClick={() => handleClick("who")}
        >
          <div className="flex flex-col" onClick={handleShowGuests}>
            <p>Who</p>
            <p>Add guests</p>
          </div>
          <button
            className="flex items-center gap-2 cursor-pointer bg-[#FB355C] p-2 rounded-lg text-white"
            onClick={handleCountGuests}
          >
            <MdSearch className="text-2xl" />
            <span className="ml-2 font-semibold">Search</span>
          </button>
        </div>
      </div>

      {/* Location input */}
      {openLocation && <LocationPage />}
      {/* Guests input */}
      {showGuests && <AddToCart />}
    </div>
  );
};

export default SearchBar;
