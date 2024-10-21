import React, { createContext, useEffect, useState } from "react";

export const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
  const [pagesData, setPagesData] = useState([
    {
      icons: {
        icon1: {
          id: 1,
          title: "Join the Living Room Session with Doja Cat",
          description:'Hosted by Doja Cat',
          booking:'$77 per guest',
          maxValue:'5',
          currentLocation:'London, United Kingdom',
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
          title: "Stay in Prince’s Purple Rain house",
          description:'Hosted by Wendy And Lisa',
          booking:'Booking closed',
          maxValue:'7',
          currentLocation:'London, United Kingdom',
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
          title: "Playdate at Polly Pocket’s Compact",
          description:'Hosted by Polly Pocket',
          booking:'Booking Close',
          maxValue:'6',
          currentLocation:'Islamabad, Pakistan',
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
          title: "Sleepover at Polly Pocket’s Compact",
          description:'Hosted by Polly Pocket',
          booking:'Booking Close',
          maxValue:'3',
          currentLocation:'Islamabad, Pakistan',
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
          title: "Go VIP with Kevin Hart",
          description:'Hosted by Kevin Hart',
          booking:'Booking Close',
          maxValue:'3',
          currentLocation:'Lahore, Pakistan',
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
          title: "Train at the X-Mansion",
          description:'Hosted by X-Mansion',
          booking:'Booking Close',
          maxValue:'7',
          currentLocation:'Lahore, Pakistan',
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
          maxValue:'5',
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
          maxValue:'3',
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
          maxValue:'3',
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
          maxValue:'4',
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
          maxValue:'5',
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
          maxValue:'7',
          images: [
            "/public/icons/icon26.webp",
            "/public/icons/icon27.webp",
            "/public/icons/icon28.webp",
            "/public/icons/icon29.webp",
            "/public/icons/icon30.webp",
          ],
        },
      },
      topcities: {
        icon1: {
          id: 1,
          title: "Top Cities",
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
      amazingviews: {
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
      omg: {
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
      bedbreakfasts: {
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
  const [filteredArr, setFilteredArr] = useState([{}]);

  const [adults, setAdults] = useState(0);
  const [childrens, setChildrens] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [maxValues,setmaxValues] = useState();
  const [currentLocations,setcurrentLocations] = useState();
  const [socialTitle, setSocialTitle] = useState('');
  const [socialImage,setSocialImage] = useState('')

  const handleShowSocialForm = (title,images) => {
    setShowSocialForm(!showSocialForm);
    setSocialTitle(title); 
    setSocialImage(images)
  };



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
        const value = item[dataFilter.toLowerCase().trim().replace(/\s+/g, '')]; 
        console.log(value)
        return value !== undefined ? value : null; 
      })
      .filter((item) => item !== null); 
    setFilteredArr(newFilteredArr);
  }, [dataFilter, pagesData]);


const handleCountGuests = ()=>{
  const totalGuests = adults + childrens + infants + pets;

  const data = filteredArr?.[0];
  console.log(data)
  const total = Object?.values(data);

const maxGuests = total?.filter((item)=>item.maxValue ==totalGuests)
 setmaxValues(maxGuests)
}

const cityNames = [{
  Isb:'Islamabad, Pakistan',
  lhr:'Lahore, Pakistan',
  Istanbul:'Istanbul, Turkiye',
  karachi:'Karachi, Pakistan',
  paris:'Paris, France',
  murree:'Murree, Pakistan',
  london:'London, United Kingdom',
  toronto:'Toronto, Canada',
  bangkok:'Bangkok, Thailand',
  sudia:'Saudia Arabia',
  rawalpindi:'Rawalpindi, Pakistan',
  rome:'Rome, Italy',
  jeddah:'Jeddah, Saudi Arabia',
  newYork:'New York, United States',
  athens:'Athens, Greece',
  tbilisi:'Tbilisi, Georgia',
  abuDhabi:'Abu Dhabi, United Arab Emirates',
  riyadh:'Riydha Saudi Arabia',
  vienna:'Vienna, Austria',
}]


const handleLocationChange = (selectedCity) => {
  
  const cities = cityNames[0]; 
  const cityValues = Object.values(cities); 
  const data = filteredArr?.[0]; 
  const totalLocations = Object.values(data);
  const cityLocations = totalLocations?.filter(item => {
    const match = item.currentLocation === selectedCity; 
    console.log('Matching city:', match ? selectedCity : 'No match'); 
    return match; 
  });
  setcurrentLocations(cityLocations); 
};




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
        pets, 
        setPets,
        infants, 
        setInfants,
        childrens, 
        setChildrens,
        adults, 
        setAdults,
        handleCountGuests,
        maxValues,
        cityNames,
        currentLocations,
        handleLocationChange,
        socialTitle,
        socialImage,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};
