import React, { useContext, useEffect, useState } from "react";
import Pages from "../../pages/Pages";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { MdSaveAlt } from "react-icons/md";
import { PagesContext } from "../../context/PagesContext";
import SocialCard from "../../pages/SocialCard";
import { Link } from "react-router-dom";

const Home = () => {
  const { handleShowSocialForm, showSocialForm, filteredArr, maxValues, currentLocations,
  } =
    useContext(PagesContext);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  console.log(maxValues)

  if (!filteredArr) {
    return <p>No pages found.</p>;
  }
  // console.log(filteredArr);

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
  console.log(currentLocations)

  return (
    <div>
      <Pages />
      {/* Slider for each page */}
      <div className="flex justify-start items-center gap-6 flex-wrap px-10 py-14 mt-[75px]">
        {maxValues?.length > 0 ? (
          maxValues.map((item) => {
            const { id, title, images, description, booking } = item;
            return (
              <div
                key={id}
                className="bg-white shadow-lg rounded-lg overflow-hidden relative h-[400px] w-[300px]"
              >
                <Link to={`/individual/${id}`} className="relative h-full">
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
                      alt={title}
                      className="w-full h-60 object-cover rounded-md cursor-pointer"
                    />
                    <div className="flex flex-col py-3 px-2">
                      <p className="font-medium text-gray-900 text-lg">{title}</p>
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
                    onClick={() => handleShowSocialForm(title,images[0])}
                  >
                    <MdSaveAlt size={20} className="transform rotate-270" />
                  </button>
                </Link>
              </div>
            );
          })
        ) : currentLocations && currentLocations.length > 0 ? (
          currentLocations.map((item) => {
            const { id, title, images, description, booking } = item;
            return (
            <div
                key={id}
                className="bg-white shadow-lg rounded-lg overflow-hidden relative h-[400px] w-[300px]"
              >
                <Link to={`/individual/${id}`} className="relative h-full">
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
                      alt={title}
                      className="w-full h-60 object-cover rounded-md cursor-pointer"
                    />
                    <div className="flex flex-col py-3 px-2">
                      <p className="font-medium text-gray-900 text-lg">{title}</p>
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
               {console.log(title)}
                  {/* Save button */}
                  <button
                    className="absolute top-2 right-2 bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full text-gray-700 z-10"
                    onClick={() => handleShowSocialForm(title,images[0])}
                  >
                    <MdSaveAlt size={20} className="transform rotate-270" />
                  </button>
                </Link>
              </div>
            )
          })
        ) : total?.map((item) => {
          const { id, title, images, description, booking } = item;

          return (
            <div
              key={id}
              className="bg-white shadow-lg rounded-lg overflow-hidden relative h-[400px] w-[300px]"
            >
              <Link to={`/individual/${id}`} className="relative h-full">
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
                    alt={title}
                    className="w-full h-60 object-cover rounded-md cursor-pointer"
                  />
                  <div className="flex flex-col py-3 px-2">
                    <p className="font-medium text-gray-900 text-lg">{title}</p>
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
                  onClick={() => handleShowSocialForm(title,images[0])}
                >
                  <MdSaveAlt size={20} className="transform rotate-270" />
                </button>
              </Link>
            </div>
          );
        })}

      </div>

      {/* Modal for SocialCard */}
      {showSocialForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" ">
            <SocialCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
