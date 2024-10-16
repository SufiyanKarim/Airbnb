import React, { useContext } from 'react'
import AbuDhabi from '../assets/locationImages/AbuDhabi.png';
import Athens from '../assets/locationImages/athens.png';
import Bangkok from '../assets/locationImages/bangkok.webp';
import ISB from '../assets/locationImages/isb.png';
import Istanbul from '../assets/locationImages/istambul.png'; // Assuming the correct name is Istanbul
import Jeddah from '../assets/locationImages/jeddah.png';
import Karachi from '../assets/locationImages/karachi.webp';
import LHR from '../assets/locationImages/lhr.webp'; // Assuming LHR is for Lahore
import London from '../assets/locationImages/london.png';
import Murree from '../assets/locationImages/murree.webp';
import NewYork from '../assets/locationImages/newYork.webp';
import Paris from '../assets/locationImages/paris.webp';
import Rawalpindi from '../assets/locationImages/rawalpindi.webp';
import Riyadh from '../assets/locationImages/Riyadh.webp';
import Rome from '../assets/locationImages/rome.png';
import Saudi from '../assets/locationImages/saudi.webp'; 
import Tbilisi from '../assets/locationImages/Tbilisi.webp';
import Toronto from '../assets/locationImages/toronto.png'; 
import Vienna from '../assets/locationImages/Vienna.png';
import { PagesContext } from '../context/PagesContext';



const LocationPage = () => {
    const {cityNames,handleLocationChange} = useContext(PagesContext)

    

    return (
        <div className='w-[30%] h-full fixed top-32 left-60 z-50 '>
            <div className='w-[100%] bg-white shadow-2xl rounded-xl overflow-hidden'>
                <h1 className='p-2 font-semibold text-gray-700'>Suggestion destinations</h1>
                <div className='w-full h-full flex flex-col space-y-1 p-3 overflow-y-auto'>
                    {/* Wrapper for showing 5 items and scrolling for the rest */}
                    <div className='h-full max-h-[360px] overflow-y-auto' id='locationpage'>
                        {/* List of locations */}
                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].Isb)}>
                            <img src={ISB} alt='Islamabad' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].Isb}</h2>
                                <p className='text-gray-500 text-base'>For sights like Faisal Mosque</p>
                            </div>
                        </div>
                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].lhr)}>
                            <img src={LHR} alt='Lahore' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].lhr}</h2>
                                <p className='text-gray-500 text-base'>For a trip aboard</p>
                            </div>
                        </div>
                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].Istanbul)}>
                            <img src={Istanbul} alt='Istanbul' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].Istanbul}</h2>
                                <p className='text-gray-500 text-base'>For its bustling nightlife</p>
                            </div>
                        </div>
                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].karachi)}>
                            <img src={Karachi} alt='Karachi' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].karachi}</h2>
                                <p className='text-gray-500 text-base'>Popular with travelers near you</p>
                            </div>
                        </div>
                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].paris)}>
                            <img src={Paris} alt='Paris' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].paris}</h2>
                                <p className='text-gray-500 text-base'>For sights like Eiffel Tower</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].murree)}>
                            <img src={Murree} alt='Murree' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].murree}</h2>
                                <p className='text-gray-500 text-base'>For a trip aboard</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].london)}>
                            <img src={London} alt='London' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].london}</h2>
                                <p className='text-gray-500 text-base'>For its stunning architecture</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].toronto)}>
                            <img src={Toronto} alt='Toronoto' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].toronto}</h2>
                                <p className='text-gray-500 text-base'>For its top-notch dining</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md'
                            onClick={() => handleLocationChange(cityNames[0].bangkok)}>
                            <img src={Bangkok} alt='Bangkok' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].bangkok}</h2>
                                <p className='text-gray-500 text-base'>For sights like Grand Place</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].sudia)}>
                            <img src={Saudi} alt='Saudi' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].sudia}</h2>
                                <p className='text-gray-500 text-base'>For a trip aboard</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].rawalpindi)}>
                            <img src={Rawalpindi} alt='Rawalpindi' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].rawalpindi}</h2>
                                <p className='text-gray-500 text-base'>Popular with travelers near you</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].rome)}>
                            <img src={Rome} alt='Rome' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].rome}</h2>
                                <p className='text-gray-500 text-base'>For its stunning architecture</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].jeddah)}>
                            <img src={Jeddah} alt='Jeddah' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].jeddah}</h2>
                                <p className='text-gray-500 text-base'>For a trip aboard</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md'
                            onClick={() => handleLocationChange(cityNames[0].newYork)}>
                            <img src={NewYork} alt='New York' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].newYork}</h2>
                                <p className='text-gray-500 text-base'>For sights like Central Park</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].riyadh)}>
                            <img src={Riyadh} alt='Riyadh' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].riyadh}</h2>
                                <p className='text-gray-500 text-base'>National Museum of Sudia Arabia</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].abuDhabi)}>
                            <img src={AbuDhabi} alt='AbuDhabi' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].abuDhabi}</h2>
                                <p className='text-gray-500 text-base'>Popular beach destination</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].tbilisi)}>
                            <img src={Tbilisi} alt='Tbilisi' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].tbilisi}</h2>
                                <p className='text-gray-500 text-base'>For its top-notch dining</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].athens)}>
                            <img src={Athens} alt='Athens' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].athens}</h2>
                                <p className='text-gray-500 text-base'>For sights like Acropolis of Athens</p>
                            </div>
                        </div>

                        <div className='flex items-center mx-3 hover:bg-gray-200 cursor-pointer rounded-md' onClick={() => handleLocationChange(cityNames[0].vienna)}>
                            <img src={Vienna} alt='vienna' className='w-20 h-20 object-cover p-3' />
                            <div>
                                <h2 className='font-medium text-gray-800'>{cityNames[0].vienna}</h2>
                                <p className='text-gray-500 text-base'>For a trip aboard</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationPage;
