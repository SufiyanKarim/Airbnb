import React, { useContext, useEffect, useState } from "react";
import Pages from "../../pages/Pages";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { CiSaveUp2 } from "react-icons/ci";
import { PagesContext } from "../../context/PagesContext";
import SocialCard from "../../pages/SocialCard";

const Home = () => {
  const { handleShowSocialForm, showSocialForm, filteredArr } =
    useContext(PagesContext);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  if (!filteredArr) {
    return <p>No pages found.</p>;
  }
  console.log(filteredArr);

  // Handle image slider forward
  const handleNext = (id, imagesLength) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % imagesLength,
    }));
  };

  // Handle image slider backward
  const handlePrev = (id, imagesLength) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + imagesLength) % imagesLength,
    }));
  };
  const data = filteredArr?.[0];

  const total = Object?.values(data);

  return (
    <div>
      <Pages />
      {/* Slider for each page */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        {total?.map((item) => {
          const { id, title, images, description, booking } = item;

          return (
            <div
            key={id}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative h-[400px] w-[300px]" // Set fixed height and width for the card
          >
            <div className="relative h-full">
              {/* Previous button */}
              <button
                className="absolute left-2 top-1/3 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full text-gray-700 z-10"
                onClick={() => handlePrev(id, images.length)}
              >
                <BiChevronLeft size={20} />
              </button>
          
              {/* Image */}
              <div className="">
                <img
                  src={images[currentImageIndex[id] || 0]}
                  key={id}
                  alt={title}
                  className="w-full h-60 object-cover rounded-md cursor-pointer"
                />
                <div className="flex flex-col py-3 px-2">
                  <p className="font-medium text-gray-900 text-lg">{title}</p> {/* Adjust font size */}
                  <p className="text-gray-600 font-medium">{description}</p>
                  <p className="font-medium text-gray-900">{booking}</p>
                </div>
              </div>
          
              {/* Next button */}
              <button
                className="absolute right-2 top-1/3 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full text-gray-700 z-10"
                onClick={() => handleNext(id, images.length)}
              >
                <BiChevronRight size={20} />
              </button>
          
              {/* Save button */}
              <button
                className="absolute top-2 right-2 bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full text-gray-700 z-10"
                onClick={handleShowSocialForm}
              >
                <CiSaveUp2 size={20} className="transform rotate-270" />
              </button>
            </div>
          </div>
          );
        })}
      </div>

      {/* Modal for SocialCard */}
      {showSocialForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6">
            <SocialCard />
            {/* <button 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" 
              onClick={handleShowSocialForm}
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
