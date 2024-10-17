import React, { useContext, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { PagesContext } from '../../context/PagesContext';
import IndividualPageHeader from './IndividualPageHeader';
import BookingPage from '../../components/BookingPage';
import MonthCalender from '../../components/MonthCalender';
import { MdOutlineShare, MdOutlineBedroomParent, MdHouse } from "react-icons/md";
import { FaShower, FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoLockClosedOutline, IoWifi, IoTvOutline } from "react-icons/io5";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LuLampDesk } from "react-icons/lu";
import { PiCityLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import CommentSection from './CommentSection';

const IndividualPage = () => {
  const { id } = useParams();
  const { filteredArr } = useContext(PagesContext);
  const [isSticky, setIsSticky] = useState(false);
  const imageSectionRef = useRef(null);

  const data = filteredArr?.[0];
  const total = Object?.values(data);
  const singlePageData = total?.find(item => item.id == id);

  // Extract the images and title dynamically
  const images = singlePageData?.images || [];
  const title = singlePageData?.title || "Default Title";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); 
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (imageSectionRef.current) {
      observer.observe(imageSectionRef.current);
    }

    return () => {
      if (imageSectionRef.current) {
        observer.unobserve(imageSectionRef.current);
      }
    };
  }, []);

  return (
    <div className='w-[100%] h-[100%] bg-white'>
      {/* Sticky Header */}
      <IndividualPageHeader isSticky={isSticky} />

      <div className='w-[90%] m-auto'>
        <div className='flex justify-between items-center py-5'>
          <h1 className='text-3xl font-semibold text-gray-800 '>{title}</h1>
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

        {/* Image Gallery */}
        <div className='grid grid-cols-2 gap-3 h-[100vh]' ref={imageSectionRef}>
          {/* Main large image */}
          <div className='h-full'>
            <img
              src={images[0]}
              alt="Main Image"
              className='rounded-tl-md rounded-bl-md w-full h-full object-cover'
            />
          </div>

          {/* Four smaller images */}
          <div className="grid grid-cols-2 gap-2 h-full">
            {images.slice(1, 5).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Small Image ${index + 1}`}
                className='h-full w-full object-cover aspect-square'
              />
            ))}
          </div>
        </div>

        {/* More content below */}
        <div className='flex justify-between items-center py-5 max-w-[100%]'>
          <div className="flex flex-col gap-3 w-[60%]">
            <div>
              <h1 className='text-2xl font-semibold text-gray-800'>Room in Greater London, United Kingdom</h1>
              <p className='text-gray-600 font-normal'>1 double bed shared bathroom</p>
            </div>

            <div className='flex items-center justify-between gap-3 w-[100%] bg-white border border-gray-300 p-3 rounded-md'>
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
              <img src={images[0]} className='h-10 w-10 rounded-full' />
              <div>
                <h1 className='text-xl font-semibold'>Stay with Sara</h1>
                <p className='text-gray-700'>Superhost . 11 years hosting</p>
              </div>
            </div>
            <hr />
          </div>
          <BookingPage />
        </div>

        <div className='w-[60%]'>
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
          <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold text-gray-800'>About this place</h1>
            <p className='text-gray-800 text-base'>Large stylish bedroom with double bed Hackney Central  / Lower Clapton / Homerton. Very well situated in trendy area. Close to shops, cafés, restaurants and  5 mn walk from Millfield Park and Hackney Marshes. Extra guest £15 per night.</p>
          </div>
          <button className='font-xl py-3 text-gray-900 font-semibold underline'>See more...</button>
          <hr />

          <div className='py-5'>
            <h1 className='text-gray-800 font-semibold text-2xl py-3'>What this place offers</h1>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex items-center gap-2'>
                <IoLockClosedOutline className='text-3xl text-gray-800' />
                <h1 className='text-gray-800 font-medium'>Lock on bedroom door</h1>
              </div>
              <div className='flex items-center gap-2'>
                <PiCityLight className='text-3xl text-gray-800'/>
                <h1 className='text-gray-800 font-medium'>City skyline view</h1>
              </div>
              <div className='flex items-center gap-2'>
                <TbToolsKitchen2 className='text-3xl text-gray-800' />
                <h1 className='text-gray-800 font-medium'>Kitchen </h1>
              </div>
              <div className='flex items-center gap-2'>
                <IoWifi className='text-3xl text-gray-800'/>
                <h1 className='text-gray-800 font-medium'>Wifi</h1>
              </div>
              <div className='flex items-center gap-2'>
                <LuLampDesk className='text-3xl text-gray-800'/>
                <h1 className='text-gray-800 font-medium'>Dedicated workspace </h1>
              </div>
              <div className='flex items-center gap-2'>
                <IoTvOutline className='text-3xl text-gray-800' />
                <h1 className='text-gray-800 font-medium'>65 inch HDTV with HBO Max, Netflix, standard cable </h1>
              </div>
            </div>
          </div>
          <hr className='py-3' />
          <MonthCalender />
        </div>
        <hr className='my-4' />

        <div>
          <CommentSection />
        </div>
      </div>
    </div>
  )
}

export default IndividualPage;