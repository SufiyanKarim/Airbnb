import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { differenceInDays } from 'date-fns';
import dayjs from 'dayjs';

const BookingPage = () => {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const ratePerNight = 85; // Price per night
  const cleaningFee = 26; // Fixed cleaning fee

  // Calculate number of nights
  const calculateDays = () => {
    const [startDate, endDate] = selectedDateRange;
    if (startDate && endDate) {
      const nights = differenceInDays(new Date(endDate), new Date(startDate));
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  // Calculate Airbnb service fee based on the number of nights
  const calculateServiceFee = () => {
    const nights = calculateDays();
    if (nights === 0) return 0;
    return nights > 1 ? 16 + (nights - 1) * 8 : 16;
  };

  // Calculate total price
  const totalPrice = calculateDays() * ratePerNight + cleaningFee + calculateServiceFee();

  return (
    <div className="bg-white border border-gray-400 w-[30%] h-auto rounded-md shadow-xl p-5">
      <div className='flex items-center gap-3'>
        <span className='text-2xl font-semibold text-gray-600 line-through'>$95</span>
        <span className='text-2xl font-semibold text-gray-800'>
          ${ratePerNight} <span className='text-gray-500 text-base'>night</span>
        </span>
      </div>

      {/* MUI DateRangePicker */}
      <div className="mt-4">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateRangePicker']}>
            <DateRangePicker
              value={selectedDateRange}
              onChange={(newValue) => setSelectedDateRange(newValue)}
              localeText={{ start: 'Check-in', end: 'Check-out' }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>

      <div className='py-5'>
        <button className='w-[100%] p-3 text-center font-semibold rounded-md text-white bg-[#FA335A]'>
          Reserve
        </button>
      </div>
      <p className='text-center text-gray-800 text-base'>You won't be charged yet</p>

      <div className='flex flex-col gap-3 mt-4'>
        <div className='flex justify-between items-center '>
          <span className='text-gray-800 font-medium underline'>${ratePerNight} x {calculateDays()} night(s)</span>
          <span className='text-gray-800 font-medium'>${calculateDays() * ratePerNight}</span>
        </div>
        <div className='flex justify-between items-center '>
          <span className='text-gray-800 font-medium underline'>Cleaning fee</span>
          <span className='text-gray-800 font-medium'>${cleaningFee}</span>
        </div>
        <div className='flex justify-between items-center '>
          <span className='text-gray-800 font-medium underline'>Airbnb Service fee</span>
          <span className='text-gray-800 font-medium'>${calculateServiceFee()}</span>
        </div>
      </div>
      <hr className='mt-4' />
      <div className='flex justify-between items-center mt-2'>
        <h1>Total before taxes</h1>
        <p className='text-gray-600 font-medium'>${totalPrice}</p>
      </div>
    </div>
  );
};

export default BookingPage;
