import React, { useContext } from 'react';
import { FooterContext } from '../../context/FooterContext';
import { useLocation, matchPath } from "react-router-dom";

const Footer = () => {
  const { footerData, handleCategoryClick, selectedCategory, terms } = useContext(FooterContext);

  const location = useLocation().pathname;
  const isIndividual = matchPath("/individual/:id", location);


  return (
    <div className='bg-gray-100 w-full'>
      {!isIndividual && (
        <div className='px-10 '>
          <h1 className='font-semibold text-2xl text-gray-800'>Inspiration for future getaways</h1>

          {/* Conditionally render Categories based on the path */}

          <div className='flex justify-between space-x-6 pt-5 border-b-[1px] border-gray-400 mb-6'>
            {Object.keys(footerData).map((category) => (
              <div
                key={category}
                className={`w-full text-center pb-2 ${selectedCategory === category ? 'border-b-[2px] border-gray-800' : 'border-none'}`}
              >
                <h1
                  className={`text-gray-700 font-semibold cursor-pointer ${selectedCategory === category ? 'text-gray-900' : 'text-gray-700'}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </h1>
              </div>
            ))}
          </div>


          {/* Links */}
          <div className='grid grid-cols-6 gap-6'>
            {footerData[selectedCategory].map((link) => (
              <div key={link.name} className='flex flex-col'>
                <a href={link.url} className="text-gray-800 font-semibold">{link.name}</a>
                <p className='text-gray-500 text-base'>{link.para}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Divider */}
      <div className='py-10'>
        <hr />
      </div>

      {/* Terms Section */}
      <div className='px-10 pb-5'>
        <div className='grid grid-cols-3 gap-6'>
          {Object.keys(terms).map((termKey) => (
            <div key={termKey} className='flex flex-col'>
              <p className='text-gray-800 font-semibold'>{termKey}</p>
              <div className='flex flex-col space-y-2'>
                {terms[termKey].map((termValue, index) => (
                  <p key={index} className='text-gray-500 text-base'>
                    {termValue}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
