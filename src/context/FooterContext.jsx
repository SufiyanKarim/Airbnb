import React, { createContext, useEffect, useState } from "react";

export const FooterContext = createContext();

export const FooterProvider = ({ children }) => {

    const [footerData,setFooterData] = useState({
        popular: [
          { name: 'Canmore', para:'Condon rentals', url: 'https://www.airbnb.com/canmore-canada/stays/condos' },
          { name: 'Benalmádena', para:'Beach house rentals', url: '/html' },
          { name: 'Marbella', para:'Cottage rentals', url: '/html' },
          { name: 'Mijas', para:'House rentals', url: '/html' },
          { name: 'Prescott', para:'House rentals', url: '/html' },
          { name: 'Scottsdale', para:'Apartment rentals', url: '/html' },
          { name: 'Tucson', para:' Pet-friendly rentals', url: '/html' },
          { name: 'Jasper', para:'Cabin rentals   ', url: '/html' },
          { name: 'Mountain View', para:'Family-friendly rentals', url: '/html' },
          { name: 'Devonport', para:'Cottage rentals', url: '/html' },
          { name: 'Mallacoota', para:'Pet-friendly rentals', url: '/html' },
          { name: 'Ibiza', para:'Vacation rentals', url: '/html' },
          { name: 'Anaheim', para:'House rentals', url: '/html' },
          { name: 'Monterey', para:'Bungalow rentals', url: '/html' },
          { name: 'Paso Robles', para:'House rentals', url: '/html' },
          { name: 'Santa Barbara', para:'Beachfront rentals', url: '/html' },
          { name: 'Sonoma', para:'Beach house rentals', url: '/html' },
          { name: 'La Serena', para:'Beachfront rentals', url: '/html' },          
        ],
        artsAndCulture: [
            { name: 'Phoenix', para:'Rentals with pools', url: '/html' },
            { name: 'Hot Springs', para:'Lakehouse rentals', url: '/html' },
            { name: 'Los Angeles', para:'Rentals with pools', url: '/html' },
            { name: 'San Diego', para:'Beach condo rentals', url: '/html' },
            { name: 'San Francisco', para:'Vacation rentals', url: '/html' },
            { name: 'Barcelona', para:'Vacation rentals', url: '/html' },
            { name: 'Los Angeles', para:'Rentals with pools', url: '/html' },
            { name: 'San Diego', para:'Beach condo rentals', url: '/html' },
            { name: 'San Francisco', para:'Vacation rentals', url: '/html' },
            { name: 'Barcelona', para:'Vacation rentals', url: '/html' },
        ],
        outdoors: [
            { name: 'Canmore', para:'Condon rentals', url: '/html' },
            { name: 'Benalmádena', para:'Beach house rentals', url: '/html' },
            { name: 'Marbella', para:'Cottage rentals', url: '/html' },

            { name: 'Devonport', para:'Cottage rentals', url: '/html' },
            { name: 'Mallacoota', para:'Pet-friendly rentals', url: '/html' },
            { name: 'Ibiza', para:'Vacation rentals', url: '/html' },
            { name: 'Anaheim', para:'House rentals', url: '/html' },
            { name: 'Monterey', para:'Bungalow rentals', url: '/html' },
            { name: 'Paso Robles', para:'House rentals', url: '/html' },
            { name: 'Santa Barbara', para:'Beachfront rentals', url: '/html' },
            { name: 'Sonoma', para:'Beach house rentals', url: '/html' },
            { name: 'La Serena', para:'Beachfront rentals', url: '/html' }, 
        ],
        mountains:[
          { name: 'Prescott', para:'House rentals', url: '/html' },
          { name: 'Scottsdale', para:'Apartment rentals', url: '/html' },
          { name: 'Tucson', para:' Pet-friendly rentals', url: '/html' },
          { name: 'Jasper', para:'Cabin rentals   ', url: '/html' },
          { name: 'Mountain View', para:'Family-friendly rentals', url: '/html' },
          { name: 'Devonport', para:'Cottage rentals', url: '/html' },
          { name: 'Mallacoota', para:'Pet-friendly rentals', url: '/html' },
          { name: 'Ibiza', para:'Vacation rentals', url: '/html' },
          { name: 'Anaheim', para:'House rentals', url: '/html' },
          { name: 'Monterey', para:'Bungalow rentals', url: '/html' },
          { name: 'Paso Robles', para:'House rentals', url: '/html' },
          { name: 'Santa Barbara', para:'Beachfront rentals', url: '/html' },
          { name: 'Sonoma', para:'Beach house rentals', url: '/html' },
          { name: 'La Serena', para:'Beachfront rentals', url: '/html' }, 
        ],
        beach:[
            { name: 'Canmore', para:'Condon rentals', url: '/html' },
            { name: 'Benalmádena', para:'Beach house rentals', url: '/html' },
            { name: 'Marbella', para:'Cottage rentals', url: '/html' },
            { name: 'Mijas', para:'House rentals', url: '/html' },
            { name: 'Prescott', para:'House rentals', url: '/html' },
            { name: 'Scottsdale', para:'Apartment rentals', url: '/html' },
            { name: 'Tucson', para:' Pet-friendly rentals', url: '/html' },
            { name: 'Jasper', para:'Cabin rentals   ', url: '/html' },
            { name: 'Mountain View', para:'Family-friendly rentals', url: '/html' },
            { name: 'Devonport', para:'Cottage rentals', url: '/html' },
            { name: 'Mallacoota', para:'Pet-friendly rentals', url: '/html' },
           
        ],
        uniqueStays:[
            { name: 'Canmore', para:'Condon rentals', url: '/html' },
          { name: 'Benalmádena', para:'Beach house rentals', url: '/html' },
          { name: 'Marbella', para:'Cottage rentals', url: '/html' },
          { name: 'Mijas', para:'House rentals', url: '/html' },
          { name: 'Prescott', para:'House rentals', url: '/html' },
          { name: 'Scottsdale', para:'Apartment rentals', url: '/html' },
          { name: 'Tucson', para:' Pet-friendly rentals', url: '/html' },

        ],
        categories:[
            { name: 'Canmore', para:'Condon rentals', url: '/html' },
            { name: 'Benalmádena', para:'Beach house rentals', url: '/html' },
            { name: 'Marbella', para:'Cottage rentals', url: '/html' },
            { name: 'Mijas', para:'House rentals', url: '/html' },
            { name: 'Prescott', para:'House rentals', url: '/html' },
            { name: 'Scottsdale', para:'Apartment rentals', url: '/html' },
            { name: 'Tucson', para:' Pet-friendly rentals', url: '/html' },
            { name: 'Jasper', para:'Cabin rentals   ', url: '/html' },
            { name: 'Mountain View', para:'Family-friendly rentals', url: '/html' },
            { name: 'Devonport', para:'Cottage rentals', url: '/html' },

        ],
        ThingsToDo:[
            { name: 'Canmore', para:'Condon rentals', url: '/html' },
          { name: 'Benalmádena', para:'Beach house rentals', url: '/html' },
          { name: 'Marbella', para:'Cottage rentals', url: '/html' },
          { name: 'Mijas', para:'House rentals', url: '/html' },
          { name: 'Prescott', para:'House rentals', url: '/html' },
          { name: 'Scottsdale', para:'Apartment rentals', url: '/html' },
          { name: 'Tucson', para:' Pet-friendly rentals', url: '/html' },
          { name: 'Jasper', para:'Cabin rentals   ', url: '/html' },
          { name: 'Mountain View', para:'Family-friendly rentals', url: '/html' },
          { name: 'Devonport', para:'Cottage rentals', url: '/html' },
          { name: 'Mallacoota', para:'Pet-friendly rentals', url: '/html' },
       
        ],
        travelTipsAndInspiration:[
            { name: 'Canmore', para:'Condon rentals', url: '/html' },
          { name: 'Benalmádena', para:'Beach house rentals', url: '/html' },
          { name: 'Marbella', para:'Cottage rentals', url: '/html' },
          { name: 'Mijas', para:'House rentals', url: '/html' },
          { name: 'Prescott', para:'House rentals', url: '/html' },
          { name: 'Scottsdale', para:'Apartment rentals', url: '/html' },
          { name: 'Tucson', para:' Pet-friendly rentals', url: '/html' },
          { name: 'Jasper', para:'Cabin rentals   ', url: '/html' },
          { name: 'Mountain View', para:'Family-friendly rentals', url: '/html' },
          { name: 'Devonport', para:'Cottage rentals', url: '/html' },
          { name: 'Mallacoota', para:'Pet-friendly rentals', url: '/html' },
          { name: 'Ibiza', para:'Vacation rentals', url: '/html' },
          { name: 'Anaheim', para:'House rentals', url: '/html' },
          { name: 'Monterey', para:'Bungalow rentals', url: '/html' },
          { name: 'Paso Robles', para:'House rentals', url: '/html' },
       
        ],
        airbnbFriendlyApartments:[
            { name: 'Canmore', para:'Condon rentals', url: '/html' },
          { name: 'Benalmádena', para:'Beach house rentals', url: '/html' },
          { name: 'Marbella', para:'Cottage rentals', url: '/html' },
          { name: 'Mijas', para:'House rentals', url: '/html' },
          { name: 'Prescott', para:'House rentals', url: '/html' },
          { name: 'Scottsdale', para:'Apartment rentals', url: '/html' },
          { name: 'Tucson', para:' Pet-friendly rentals', url: '/html' },
          { name: 'Jasper', para:'Cabin rentals   ', url: '/html' },
          { name: 'Mountain View', para:'Family-friendly rentals', url: '/html' },
          { name: 'Devonport', para:'Cottage rentals', url: '/html' },
          { name: 'Mallacoota', para:'Pet-friendly rentals', url: '/html' },
          { name: 'Ibiza', para:'Vacation rentals', url: '/html' },
        
        ],
      })

      const [terms, setTerms] = useState({
        Support:[
            'Help center',
            'AirCover',
            'Anti-discrimination ',
            'Disability support',
            'Cancellation options',
            'Report neighborhood concerns',
        ],
        Hosting:[
            'Airbnb your home',
            'AirCover for Hosts',
            'Hosting resources',
            'Community forum',
            'Hosting responsibly',
            'Airbnb-friendly apartments',
            'Join a free Hosting class'
        ],
        Airbnb:[
            'Newsroom',
            'New features',
            'Careers',
            'Investors',
            'Gift cards',
            'Airbnb.org emergency stays'
        ],
      })

      const [selectedCategory, setSelectedCategory] = useState('popular');
      const handleCategoryClick = (category) => {
              setSelectedCategory(category);
        };
    
    return(
        <FooterContext.Provider value={{footerData,selectedCategory,handleCategoryClick,terms}}>
            {children}
        </FooterContext.Provider>
    )
}