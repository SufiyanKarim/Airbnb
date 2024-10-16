import React, { useContext, useState } from 'react'
import { MdOutlineShare } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import icon1 from "../assets/individualPageImages/icons/icon1.jpeg";
import icon2 from "../assets/individualPageImages/icons/icon2.webp";
import icon3 from "../assets/individualPageImages/icons/icon3.webp";
import icon4 from "../assets/individualPageImages/icons/icon4.jpeg";
import icon5 from "../assets/individualPageImages/icons/icon5.webp";
import { useParams } from 'react-router-dom';
import { PagesContext } from '../context/PagesContext';
import { FaStar } from "react-icons/fa";
import BookingPage from '../components/BookingPage';
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdHouse } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";




const IndividualPage = () => {
  const { id } = useParams();
  const { filteredArr } = useContext(PagesContext);
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const data = filteredArr?.[0];
  // console.log(data)
  const total = Object?.values(data);
  const singlePageData = total?.find(item => item.id == id);
  console.log(singlePageData);
  return (
    <div className='w-[100%] h-[100%] bg-white'>
      <div className='w-[90%] m-auto'>
        <div className='flex justify-between items-center py-5'>
          <h1 className='text-3xl font-semibold text-gray-800 '>Join the Living Room Session with Doja Cat</h1>
          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center items-center gap-1">
              <MdOutlineShare className="text-xl" />
              <p className="font-medium">Share</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <CiHeart className="text-xl" />
              <p className="font-medium">Save</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-3'>
          <div>
            <img src={icon1} alt="" className='rounded-tl-md rounded-bl-md h-[80vh]' />
          </div>
          <div className="grid grid-cols-2 gap-1 h-[80vh]">
            <img src={icon2} alt="" className=' h-[100%]' />
            <img src={icon3} alt="" className='rounded-tr-md h-[100%]' />
            <img src={icon4} alt="" className=' h-[100%]' />
            <img src={icon5} alt="" className='rounded-br-md h-[100%]' />
          </div>
        </div>


        <div className='flex justify-between items-center py-5 max-w-[100%]'>
          <div className="flex  flex-col gap-3 w-[60%]">
            <div>
              <h1 className='text-2xl font-semibold text-gray-800'>Room in Greater London, United Kingdom</h1>
              <p className='text-gray-600 font-normal'>1 double bedshared bathroom</p>
            </div>


            <div className='flex  items-center justify-between gap-3 w-[100%] bg-white  border border-gray-300 p-3 rounded-md'>
              <h1 className='text-xl font-semibold text-center text-gray-950'>Guest Favorite</h1>
              <p className='text-gray-900 text-left font-semibold'>One of the most loved homes on Airbnb, according to guests</p>
              <div className='flex items-center flex-col'>
                <span className='text-2xl font-semibold'>4.87</span>
                <div className='flex items-center gap-1 '>
                  <FaStar className='text-xs' />
                  <FaStar className='text-xs' />
                  <FaStar className='text-xs' />
                  <FaStar className='text-xs' />
                  <FaStar className='text-xs' />
                </div>
              </div>
              <div className='flex flex-col items-center '>
                <span className='text-xl font-semibold'>173</span>
                <span className='text-gray-500 underline'>Reviews</span>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <img src={icon1} className='h-10 w-10 rounded-full' />
              <div>
                <h1 className='text-xl font-semibold'>Stay with Sara</h1>
                <p className='text-gray-700'>Superhost . 11 years hosting</p>
              </div>
            </div>
            <hr />
          </div>
          <BookingPage />
        </div>

        <div className='w-[70%]'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <MdOutlineBedroomParent className='text-4xl text-gray-800' />
              <div>
                <h1 className='text-gray-900 font-semibold text-xl'>Room in a townhouse</h1>
                <p className='text-gray-600 text-base'>Your own room in a home, plus access to shared spaces.</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <MdHouse className='text-4xl text-gray-800' />
              <div>
                <h1 className='text-gray-900 font-semibold text-xl'>Shared common spaces</h1>
                <p className='text-gray-600 text-base'>You'll share parts of the home with the Host and other guests.</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <FaShower className='text-4xl text-gray-800' />
              <div>
                <h1 className='text-gray-900 font-semibold text-xl'>Shared bathroom</h1>
                <p className='text-gray-600 text-base'>You’ll share the bathroom with others.</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <SlCalender className='text-4xl text-gray-800' />
              <div>
                <h1 className='text-gray-900 font-semibold text-xl'>Free cancellation before Dec 5</h1>
                <p className='text-gray-600 text-base'>Get a full refund if you change your mind.</p>
              </div>
            </div>
          </div>
          <hr className='my-5' />
          <div>
            <h1>About this place</h1>
            <p>Large stylish bedroom with double bed Hackney Central  / Lower Clapton / Homerton. Very well situated in trendy area. Close to shops, cafés, restaurants and  5 mn walk from Millfield Park and Hackney Marshes.Extra guest £15 per night.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualPage