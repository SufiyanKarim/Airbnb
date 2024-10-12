import React, { useState } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const dummyData = () => {
  const pagesData = [
    {
      icons: {
        icon1: {
          id: 1,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon1.jpeg",
            "/public/icons/icon2.webp",
            "/public/icons/icon3.webp",
            "/public/icons/icon4.jpeg",
            "/public/icons/icon5.webp",
          ],
        },
        icon2: {
          id: 2,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon6.webp",
            "/public/icons/icon7.webp",
            "/public/icons/icon8.webp",
            "/public/icons/icon9.webp",
            "/public/icons/icon10.webp",
          ],
        },
        icon3: {
          id: 3,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon11.webp",
            "/public/icons/icon12.webp",
            "/public/icons/icon13.webp",
            "/public/icons/icon14.webp",
            "/public/icons/icon15.webp",
          ],
        },
        icon4: {
          id: 4,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon16.webp",
            "/public/icons/icon17.webp",
            "/public/icons/icon18.webp",
            "/public/icons/icon19.webp",
            "/public/icons/icon20.webp",
          ],
        },
        icon5: {
          id: 5,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon21.webp",
            "/public/icons/icon22.webp",
            "/public/icons/icon23.jpeg",
            "/public/icons/icon24.webp",
            "/public/icons/icon25.jpeg",
          ],
        },
        icon6: {
          id: 6,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon26.webp",
            "/public/icons/icon27.webp",
            "/public/icons/icon28.webp",
            "/public/icons/icon29.webp",
            "/public/icons/icon30.webp",
          ],
        },
      },
      rooms: {
        icon1: {
          id: 1,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon1.jpeg",
            "/public/icons/icon2.webp",
            "/public/icons/icon3.webp",
            "/public/icons/icon4.jpeg",
            "/public/icons/icon5.webp",
          ],
        },
        icon2: {
          id: 2,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon6.webp",
            "/public/icons/icon7.webp",
            "/public/icons/icon8.webp",
            "/public/icons/icon9.webp",
            "/public/icons/icon10.webp",
          ],
        },
        icon3: {
          id: 3,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon11.webp",
            "/public/icons/icon12.webp",
            "/public/icons/icon13.webp",
            "/public/icons/icon14.webp",
            "/public/icons/icon15.webp",
          ],
        },
        icon4: {
          id: 4,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon16.webp",
            "/public/icons/icon17.webp",
            "/public/icons/icon18.webp",
            "/public/icons/icon19.webp",
            "/public/icons/icon20.webp",
          ],
        },
        icon5: {
          id: 5,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon21.webp",
            "/public/icons/icon22.webp",
            "/public/icons/icon23.jpeg",
            "/public/icons/icon24.webp",
            "/public/icons/icon25.jpeg",
          ],
        },
        icon6: {
          id: 6,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon26.webp",
            "/public/icons/icon27.webp",
            "/public/icons/icon28.webp",
            "/public/icons/icon29.webp",
            "/public/icons/icon30.webp",
          ],
        },
      },
      topCities: {
        icon1: {
          id: 1,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon1.jpeg",
            "/public/icons/icon2.webp",
            "/public/icons/icon3.webp",
            "/public/icons/icon4.jpeg",
            "/public/icons/icon5.webp",
          ],
        },
        icon2: {
          id: 2,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon6.webp",
            "/public/icons/icon7.webp",
            "/public/icons/icon8.webp",
            "/public/icons/icon9.webp",
            "/public/icons/icon10.webp",
          ],
        },
        icon3: {
          id: 3,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon11.webp",
            "/public/icons/icon12.webp",
            "/public/icons/icon13.webp",
            "/public/icons/icon14.webp",
            "/public/icons/icon15.webp",
          ],
        },
        icon4: {
          id: 4,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon16.webp",
            "/public/icons/icon17.webp",
            "/public/icons/icon18.webp",
            "/public/icons/icon19.webp",
            "/public/icons/icon20.webp",
          ],
        },
        icon5: {
          id: 5,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon21.webp",
            "/public/icons/icon22.webp",
            "/public/icons/icon23.jpeg",
            "/public/icons/icon24.webp",
            "/public/icons/icon25.jpeg",
          ],
        },
        icon6: {
          id: 6,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon26.webp",
            "/public/icons/icon27.webp",
            "/public/icons/icon28.webp",
            "/public/icons/icon29.webp",
            "/public/icons/icon30.webp",
          ],
        },
      },
      amazingViews: {
        icon1: {
          id: 1,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon1.jpeg",
            "/public/icons/icon2.webp",
            "/public/icons/icon3.webp",
            "/public/icons/icon4.jpeg",
            "/public/icons/icon5.webp",
          ],
        },
        icon2: {
          id: 2,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon6.webp",
            "/public/icons/icon7.webp",
            "/public/icons/icon8.webp",
            "/public/icons/icon9.webp",
            "/public/icons/icon10.webp",
          ],
        },
        icon3: {
          id: 3,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon11.webp",
            "/public/icons/icon12.webp",
            "/public/icons/icon13.webp",
            "/public/icons/icon14.webp",
            "/public/icons/icon15.webp",
          ],
        },
        icon4: {
          id: 4,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon16.webp",
            "/public/icons/icon17.webp",
            "/public/icons/icon18.webp",
            "/public/icons/icon19.webp",
            "/public/icons/icon20.webp",
          ],
        },
        icon5: {
          id: 5,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon21.webp",
            "/public/icons/icon22.webp",
            "/public/icons/icon23.jpeg",
            "/public/icons/icon24.webp",
            "/public/icons/icon25.jpeg",
          ],
        },
        icon6: {
          id: 6,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon26.webp",
            "/public/icons/icon27.webp",
            "/public/icons/icon28.webp",
            "/public/icons/icon29.webp",
            "/public/icons/icon30.webp",
          ],
        },
      },
      OMG: {
        icon1: {
          id: 1,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon1.jpeg",
            "/public/icons/icon2.webp",
            "/public/icons/icon3.webp",
            "/public/icons/icon4.jpeg",
            "/public/icons/icon5.webp",
          ],
        },
        icon2: {
          id: 2,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon6.webp",
            "/public/icons/icon7.webp",
            "/public/icons/icon8.webp",
            "/public/icons/icon9.webp",
            "/public/icons/icon10.webp",
          ],
        },
        icon3: {
          id: 3,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon11.webp",
            "/public/icons/icon12.webp",
            "/public/icons/icon13.webp",
            "/public/icons/icon14.webp",
            "/public/icons/icon15.webp",
          ],
        },
        icon4: {
          id: 4,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon16.webp",
            "/public/icons/icon17.webp",
            "/public/icons/icon18.webp",
            "/public/icons/icon19.webp",
            "/public/icons/icon20.webp",
          ],
        },
        icon5: {
          id: 5,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon21.webp",
            "/public/icons/icon22.webp",
            "/public/icons/icon23.jpeg",
            "/public/icons/icon24.webp",
            "/public/icons/icon25.jpeg",
          ],
        },
        icon6: {
          id: 6,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon26.webp",
            "/public/icons/icon27.webp",
            "/public/icons/icon28.webp",
            "/public/icons/icon29.webp",
            "/public/icons/icon30.webp",
          ],
        },
      },
      surfing: {
        icon1: {
          id: 1,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon1.jpeg",
            "/public/icons/icon2.webp",
            "/public/icons/icon3.webp",
            "/public/icons/icon4.jpeg",
            "/public/icons/icon5.webp",
          ],
        },
        icon2: {
          id: 2,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon6.webp",
            "/public/icons/icon7.webp",
            "/public/icons/icon8.webp",
            "/public/icons/icon9.webp",
            "/public/icons/icon10.webp",
          ],
        },
        icon3: {
          id: 3,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon11.webp",
            "/public/icons/icon12.webp",
            "/public/icons/icon13.webp",
            "/public/icons/icon14.webp",
            "/public/icons/icon15.webp",
          ],
        },
        icon4: {
          id: 4,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon16.webp",
            "/public/icons/icon17.webp",
            "/public/icons/icon18.webp",
            "/public/icons/icon19.webp",
            "/public/icons/icon20.webp",
          ],
        },
        icon5: {
          id: 5,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon21.webp",
            "/public/icons/icon22.webp",
            "/public/icons/icon23.jpeg",
            "/public/icons/icon24.webp",
            "/public/icons/icon25.jpeg",
          ],
        },
        icon6: {
          id: 6,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon26.webp",
            "/public/icons/icon27.webp",
            "/public/icons/icon28.webp",
            "/public/icons/icon29.webp",
            "/public/icons/icon30.webp",
          ],
        },
      },
      bedbreakfast: {
        icon1: {
          id: 1,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon1.jpeg",
            "/public/icons/icon2.webp",
            "/public/icons/icon3.webp",
            "/public/icons/icon4.jpeg",
            "/public/icons/icon5.webp",
          ],
        },
        icon2: {
          id: 2,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon6.webp",
            "/public/icons/icon7.webp",
            "/public/icons/icon8.webp",
            "/public/icons/icon9.webp",
            "/public/icons/icon10.webp",
          ],
        },
        icon3: {
          id: 3,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon11.webp",
            "/public/icons/icon12.webp",
            "/public/icons/icon13.webp",
            "/public/icons/icon14.webp",
            "/public/icons/icon15.webp",
          ],
        },
        icon4: {
          id: 4,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon16.webp",
            "/public/icons/icon17.webp",
            "/public/icons/icon18.webp",
            "/public/icons/icon19.webp",
            "/public/icons/icon20.webp",
          ],
        },
        icon5: {
          id: 5,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon21.webp",
            "/public/icons/icon22.webp",
            "/public/icons/icon23.jpeg",
            "/public/icons/icon24.webp",
            "/public/icons/icon25.jpeg",
          ],
        },
        icon6: {
          id: 6,
          title: "Join the Living Room Session with Doja Cat",
          images: [
            "/public/icons/icon26.webp",
            "/public/icons/icon27.webp",
            "/public/icons/icon28.webp",
            "/public/icons/icon29.webp",
            "/public/icons/icon30.webp",
          ],
        },
      },

    },
  ];

  const iconsArray = Object.values(pagesData[0].icons);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % iconsArray.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + iconsArray.length) % iconsArray.length
    );
  };

  return (
    <div className="relative w-full">
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full text-gray-700 z-10"
        onClick={handlePrev}
      >
        <BiChevronLeft size={20} />
      </button>
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">{iconsArray[currentIndex].title}</h3>
        <div className="flex justify-center items-center">
          {iconsArray[currentIndex].images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Icon ${index + 1}`}
              className="w-40 h-40 object-cover mx-2"
            />
          ))}
        </div>
      </div>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full text-gray-700 z-10"
        onClick={handleNext}
      >
        <BiChevronRight size={20} />
      </button>
    </div>
  );
};

export default dummyData;
