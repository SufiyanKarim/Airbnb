import React, { useContext, useState } from 'react';
import { FaLink, FaEnvelope, FaComments, FaWhatsapp, FaFacebook, FaTwitter, FaEllipsisH } from 'react-icons/fa';
import icon1 from '../assets/individualPageImages/icons/icon1.jpeg';
import { FaX } from 'react-icons/fa6';
import { PagesContext } from '../context/PagesContext';

const SocialCard = () => {

  const {handleShowSocialForm} = useContext(PagesContext)
  
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50'>
      <div className='w-[90%] max-w-md bg-white rounded-lg shadow-lg p-4 relative'>
        <button className='absolute top-2 right-2' aria-label="Close">
          <FaX size={20} onClick={handleShowSocialForm} />
        </button>
        <h1 className='text-xl font-semibold mb-4 text-center'>Share Your Experience</h1>
        <div className='mb-4 flex items-center'>
          <img src={icon1} alt="Stay in Prince’s Purple Rain house" className=' h-32 object-cover rounded-md shadow-md' />
          <h2 className='text-lg font-semibold mt-2 text-center'>Stay in Prince’s Purple Rain house</h2>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {/* Sharing Options */}
          {[
            { icon: <FaLink />, label: 'Copy Link' },
            { icon: <FaEnvelope />, label: 'Email' },
            { icon: <FaComments />, label: 'Messages' },
            { icon: <FaWhatsapp />, label: 'WhatsApp' },
            { icon: <FaFacebook />, label: 'Messenger' },
            { icon: <FaFacebook />, label: 'Facebook' },
            { icon: <FaTwitter />, label: 'Twitter' },
            { icon: <FaEllipsisH />, label: 'More Options' },
          ].map((item, index) => (
            <div key={index} className='flex items-center justify-center h-12 border border-gray-400 rounded-md hover:bg-gray-100 transition-colors'>
              <div className='flex items-center w-full px-2'>
                {item.icon && <span className='mr-2 text-2xl'>{item.icon}</span>}
                <h1 className='text-gray-700'>{item.label}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
