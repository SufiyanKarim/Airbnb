import React, { useContext, useEffect, useState } from 'react';
import { FaLink, FaEnvelope, FaComments, FaWhatsapp, FaFacebook, FaTwitter, FaEllipsisH } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { PagesContext } from '../context/PagesContext';
import { GoCheck } from "react-icons/go";

const SocialCard = () => {
  const { handleShowSocialForm, socialTitle, socialImage } = useContext(PagesContext);
  const [showNotification, setShowNotification] = useState(false);

  // Function to handle copying image link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(socialImage).then(() => {
      setShowNotification(true); 
    }).catch((err) => {
      console.error("Failed to copy image link: ", err);
    });
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false); 
      }, 2000);
      return () => clearTimeout(timer); 
    }
  }, [showNotification]);

  // Function to open the respective link
  const openLink = (label) => {
    switch (label) {
      case 'Email':
        window.location.href = `mailto:?subject=${socialTitle}&body=${socialImage}`;
        break;
      case 'WhatsApp':
        window.open(`https://wa.me/?text=${socialTitle} ${socialImage}`, '_blank');
        break;
      case 'Messages':
        window.open(`https://wa.me/?text=${socialTitle} ${socialImage}`, '_blank');
        break;
      case 'Messenger':
        window.open(`https://m.me/?text=${socialTitle} ${socialImage}`, '_blank');
        break;
      case 'Facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${socialImage}`, '_blank');
        break;
      case 'Twitter':
        window.open(`https://twitter.com/intent/tweet?text=${socialTitle}&url=${socialImage}`, '_blank');
        break;
      case 'Copy Link':
        copyToClipboard();
        break;
      default:
        alert('Option not available');
        break;
    }
  };

  return (
    <div className='fixed w-[100%] top-28 left-[0%] flex items-center justify-center z-50'>
      <div className='w-[40%] bg-white rounded-lg shadow-lg p-4'>
        <button className='text-2xl' aria-label="Close" onClick={handleShowSocialForm}>
          <IoClose size={24} />
        </button>
        <h1 className='text-xl font-semibold mb-4 text-center'>Share Your Experience</h1>
        <div className='mb-4 flex items-center gap-4'>
          <img src={socialImage} alt="Stay in Prince’s Purple Rain house" className='h-20 object-cover rounded-md shadow-md' />
          <h2 className='text-lg font-semibold mt-2 text-center'>{socialTitle}</h2>
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
              <div className='flex items-center w-full px-2 cursor-pointer' onClick={() => openLink(item.label)}>
                {item.icon && <a href='' className='mr-2 text-2xl' >{item.icon}</a>}
                <h1 className='text-gray-700'>{item.label}</h1>
              </div>
            </div>
          ))}
        </div>

        {showNotification && (
          <div className='flex items-center justify-center flex-wrap gap-2 bg-white py-2 rounded-md shadow-md w-32 absolute bottom-2 border border-gray-400 z-50 left-[45%]'>
            <div className='p-1 rounded-full bg-green-500 text-white'>
              <GoCheck />
            </div>
            <h1>Copy Link</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialCard;
