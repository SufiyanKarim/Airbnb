import React from "react";
import logo from "../../assets/airbnb-logo.png";
import { TfiWorld } from "react-icons/tfi";
import { MdMenu } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import HeaderMiddle from "./calendar/HeaderMiddle";
import { Link, useLocation, matchPath } from "react-router-dom";

const Header = () => {

  const location = useLocation().pathname;
  const isIndividual = matchPath("/individual/:id", location);
  if (isIndividual) {
    return null;
  }

  return (
    <>
    <div className="flex justify-between items-center flex-wrap sticky top-0 z-50 bg-white p-4 md:p-6">
      {/* Logo and Brand */}
      <Link to="/" className="flex items-center w-[40%] sm:w-[25%] md:w-[15%] z-50">
        <img
          src={logo}
          alt="Airbnb"
          className="h-8 sm:h-10 mr-2 cursor-pointer"
        />
        {/* Apply border bottom only to the heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E1565C] border-b-4 border-[#E1565C] pb-1">
          Airbnb
        </h1>
      </Link>

      {/* Center search area for larger devices */}
      <div className="lg:block hidden absolute top-4 left-[50%] transform -translate-x-1/2 w-[90%] lg:w-[100%] bg-white">
        <HeaderMiddle />
      </div>

      {/* Menu and Profile on the right */}
      <div className="flex items-center w-[40%] sm:w-[30%] justify-end space-x-4 z-50">
        <h1 className="hidden lg:block text-base font-semibold">
          Airbnb your home
        </h1>
        <TfiWorld className="text-2xl" />
        <div className="flex items-center space-x-2 bg-white p-2 sm:p-3 rounded-full border border-gray-400 hover:shadow-lg cursor-pointer">
          <MdMenu className="text-2xl sm:text-3xl" />
          <FaCircleUser className="text-2xl sm:text-3xl text-gray-600" />
        </div>
      </div>
      
    </div>
    <hr className="mt-24 hidden sm:hidden lg:block md:block" />
    </>
  );
};

export default Header;
