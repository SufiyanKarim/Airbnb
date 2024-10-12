import React, { useState } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'; 
import { CiSaveUp2 } from "react-icons/ci";


import icon1 from '../assets/individualPageImages/icons/icon1.jpeg'
import icon2 from '../assets/individualPageImages/icons/icon2.webp'
import icon3 from '../assets/individualPageImages/icons/icon3.webp'
import icon4 from '../assets/individualPageImages/icons/icon4.jpeg'
import icon5 from '../assets/individualPageImages/icons/icon5.webp'
import icon6 from '../assets/individualPageImages/icons/icon6.webp'
import icon7 from '../assets/individualPageImages/icons/icon7.webp'
import icon8 from '../assets/individualPageImages/icons/icon8.webp'
import icon9 from '../assets/individualPageImages/icons/icon9.webp'
import icon10 from '../assets/individualPageImages/icons/icon10.webp'
import icon11 from '../assets/individualPageImages/icons/icon11.webp'
import icon12 from '../assets/individualPageImages/icons/icon12.webp'
import icon13 from '../assets/individualPageImages/icons/icon13.webp'
import icon14 from '../assets/individualPageImages/icons/icon14.webp'
import icon15 from '../assets/individualPageImages/icons/icon15.webp'
import icon16 from '../assets/individualPageImages/icons/icon16.webp'
import icon17 from '../assets/individualPageImages/icons/icon17.webp'
import icon18 from '../assets/individualPageImages/icons/icon18.webp'
import icon19 from '../assets/individualPageImages/icons/icon19.webp'
import icon20 from '../assets/individualPageImages/icons/icon20.webp'
import icon21 from '../assets/individualPageImages/icons/icon21.webp'
import icon22 from '../assets/individualPageImages/icons/icon22.webp'
import icon23 from '../assets/individualPageImages/icons/icon23.jpeg'
import icon24 from '../assets/individualPageImages/icons/icon24.webp'
import icon25 from '../assets/individualPageImages/icons/icon25.jpeg'
import icon26 from '../assets/individualPageImages/icons/icon26.webp'
import icon27 from '../assets/individualPageImages/icons/icon27.webp'
import icon28 from '../assets/individualPageImages/icons/icon28.webp'
import icon29 from '../assets/individualPageImages/icons/icon29.webp'
import icon30 from '../assets/individualPageImages/icons/icon30.webp'
import SocialCard from './SocialCard';

const Icons = () => {
  const iconData = [
    {
      title: "Icon Collection 1",
      description: "A set of premium quality icons for personal use.",
      soldOut: false,
      images: [icon1, icon2, icon3, icon4, icon5],
    },
    {
      title: "Icon Collection 2",
      description: "A collection of modern icons for web design.",
      soldOut: true,
      images: [icon6, icon7, icon8, icon9, icon10],
    },
    {
      title: "Icon Collection 3",
      description: "Minimalistic icons perfect for mobile applications.",
      soldOut: false,
      images: [icon11, icon12, icon13, icon14, icon15],
    },
    {
      title: "Icon Collection 4",
      description: "Colorful and engaging icons for presentations.",
      soldOut: false,
      images: [icon16, icon17, icon18, icon19, icon20],
    },
    {
      title: "Icon Collection 5",
      description: "Unique, handcrafted icons for special projects.",
      soldOut: true,
      images: [icon21, icon22, icon23, icon24, icon25],
    },
    {
      title: "Icon Collection 6",
      description: "Flat design icons that are perfect for websites.",
      soldOut: false,
      images: [icon26, icon27, icon28, icon29, icon30],
    },
  ];


    const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(iconData.length).fill(0)
);

 const [showSocialForm,setShowSocialForm]= useState(false)

  const handleNext = (index) => {
    setCurrentImageIndex((prev)=>{
        const newIndices = [...prev];
        newIndices[index] = (newIndices[index]+1) % iconData[index].images.length;
        return newIndices;
    })
   
  };

  const handlePrev = (index) => {
    setCurrentImageIndex((prev) => {
      const newIndices = [...prev];
      newIndices[index] =
        (newIndices[index] - 1 + iconData[index].images.length) % iconData[index].images.length;
      return newIndices;
    });
  };

  const handleShowSocialForm = ()=>{
    setShowSocialForm(!showSocialForm)
  }



  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        {iconData.map((collection, collectionIndex) => (
          <div key={collectionIndex} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
            <div className="relative">
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full text-gray-700 z-10"
                onClick={() => handlePrev(collectionIndex)}
              >
                <BiChevronLeft size={20} />
              </button>
              <img
                src={collection.images[currentImageIndex[collectionIndex]]}
                alt={collection.title}
                className="w-full h-60 object-cover"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full text-gray-700 z-10"
                onClick={() => handleNext(collectionIndex)}
              >
                <BiChevronRight size={20} />
              </button>
              <button
                className="absolute top-2 right-2 bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full text-gray-700 z-10"
                onClick={handleShowSocialForm}
              >
                <CiSaveUp2 size={20} className='transform rotate-270' />
              </button>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{collection.title}</h3>
              <p className="text-gray-600">{collection.description}</p>
              {collection.soldOut && <span className="text-red-500 font-bold">Sold Out</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for SocialCard */}
      {showSocialForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6">
            <SocialCard />
            <button 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" 
              onClick={handleShowSocialForm}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Icons;
