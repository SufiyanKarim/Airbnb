import React, { useState, useEffect, useRef } from 'react';
import { FaStar } from "react-icons/fa";

const IndividualPageHeader = ({ isSticky }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform ${
        isSticky ? 'shadow-lg' : '-translate-y-full'
      }`}
    >
      {/* Header content goes here */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 p-4 w-[90%] m-auto'>
      <div>
        <ul className='flex flex-wrap justify-center items-center gap-4 md:gap-6'>
          <li className='text-gray-800 font-semibold cursor-pointer border-b-2 border-gray-800'>Photos</li>
          <li className='text-gray-800 font-semibold cursor-pointer'>Amenities</li>
          <li className='text-gray-800 font-semibold cursor-pointer'>Reviews</li>
          <li className='text-gray-800 font-semibold cursor-pointer'>Location</li>
        </ul>
      </div>

      {/* Right section */}
      <div className='flex flex-col md:flex-row md:items-center gap-4'>
        {/* Pricing and rating */}
        <div className='flex flex-col'>
          <h1 className='font-semibold text-lg'>$170/night</h1>
          <div className='flex items-center gap-1'>
            <FaStar className='text-xs' />
            <span className='text-xs'>4.96</span>
            <span className='text-xs'>· 122 reviews</span>
          </div>
        </div>
        {/* Reserve button */}
        <div>
          <button className='w-[100%] p-3 text-center font-semibold rounded-md text-white bg-[#FA335A]'>
            Reserve
          </button>
        </div>
        </div>
      </div>
    </header>
  );
};

export default IndividualPageHeader;
