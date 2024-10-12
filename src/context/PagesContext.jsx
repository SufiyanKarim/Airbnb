import React, { createContext, useEffect, useState } from "react";

export const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
  const [pagesData, setPagesData] = useState([
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
          title: "hello  Cat",
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
      "top Cities": {
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
      "amazing Views": {
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
  ]);
  const [dataFilter, setDataFilter] = useState("icons");
  const [showSocialForm, setShowSocialForm] = useState(false);
  const [filteredArr, setFilteredArr] = useState();

  const handleShowSocialForm = () => {
    setShowSocialForm(!showSocialForm);
  };

  console.log(dataFilter)

  useEffect(() => {
    let newAllData;
    const newData = () => {
      newAllData = pagesData.map((item) => {
        console.log(item);
        return item;
      });
    };
    newData();
    const newFilteredArr = newAllData
      .map((item) => {
        const value = item[dataFilter.toLowerCase().trim()]; // Access the property
        return value !== undefined ? value : null; // Return value or null if undefined
      })
      .filter((item) => item !== null); // Filter out null values

    // Set the filtered array in the state
    setFilteredArr(newFilteredArr);
  }, [dataFilter, pagesData]);

// console.log(filteredArr)

  return (
    <PagesContext.Provider
      value={{
        pagesData,
        setPagesData,
        handleShowSocialForm,
        showSocialForm,
        dataFilter,
        setDataFilter,
        filteredArr,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};
