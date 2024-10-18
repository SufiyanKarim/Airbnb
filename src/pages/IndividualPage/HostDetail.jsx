import React from 'react';
import icon1 from '../../assets/individualPageImages/icons/icon1.jpeg';
import { FaStar } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiShoppingBagOpenDuotone } from 'react-icons/pi';
import { MdBusinessCenter, MdOutlinePrivacyTip } from 'react-icons/md';
import { FaRegMessage } from 'react-icons/fa6';
import { GiDrippingStar } from 'react-icons/gi';
import { TiGlobeOutline } from 'react-icons/ti';


const HostDetail = () => {
    return (
        <div className='w-full pb-8'>
            <div className='flex justify-between  gap-4'>
                <div className='w-[35%]'>
                    <h1 className='text-2xl text-gray-900 font-semibold mb-6'>Meet your Host</h1>
                    <div className="flex justify-between items-center p-6 border border-gray-200 rounded-xl shadow-lg max-w-[400px] h-[260px] hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
                        <div className="flex flex-col items-center w-[200px]">
                            <img
                                src={icon1}
                                alt="Profile"
                                className="w-28 h-28 rounded-full  shadow-md mb-1"
                            />
                            <div className='flex flex-col items-center'>
                            <p className="font-semibold text-4xl text-gray-900">Bo</p>
                            <p className="text-sm text-gray-800">Super Host</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-[180px] ">
                            {/* Reviews */}
                            <div className="mb-4 border-b-[1px] border-gray-300">
                                <span className='font-bold text-2xl text-gray-900'>122</span>
                                <p className='text-gray-500 text-sm'>Reviews</p>
                            </div>

                            {/* Rating */}
                            <div className="mb-4 flex  flex-col gap-2  border-b-[1px] border-gray-300">
                                <div className='flex items-center gap-1'>
                                    <span className='font-bold text-2xl text-gray-900'>4.96</span>
                                    <FaStar className='text-gray-800 text-sm' />
                                </div>
                                <p className='text-gray-500 text-sm'>Rating</p>
                            </div>

                            {/* Years Hosting */}
                            <div>
                                <span className='font-bold text-2xl text-gray-900'>3</span>
                                <p className='text-gray-500 text-sm'>Years Hosting</p>
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col gap-4 mt-10'>
                        <div className='flex items-center gap-4'>
                            <LuGraduationCap className='text-3xl text-gray-900 ' />
                            <h1 className='text-xl text-gray-900 font-normal'>Where I went to school: Copenhagen</h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <MdBusinessCenter className='text-2xl text-gray-900' />
                            <h1 className='text-xl text-gray-900 font-normal'>My work: Commercial Officer</h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <FaRegMessage className='text-2xl text-gray-900' />
                            <h1 className='text-xl text-gray-900 font-normal'>Speaks Danish and English</h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <TiGlobeOutline className='text-2xl text-gray-900' />
                            <h1 className='text-xl text-gray-900 font-normal'>Lives in Copenhagen, Denmark</h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <GiDrippingStar className='text-2xl text-gray-900' />
                            <h1 className='text-xl text-gray-900 font-normal'>What makes my home unique: minimalistic</h1>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 flex-wrap items-start pt-8'>
                        <p className='text-gray-700 text-xl'>Hi, I am Bo married to Tanzanian lady. We live in spacious flat in Copenhagen with an extra room to sleep. </p>
                        <button className='bg-gray-200 py-2 px-4 rounded-md font-semibold underline'>Show More...</button>
                    </div>
                </div>
                <div className='w-[65%] flex flex-col gap-4'>
                    <h1 className='text-2xl text-gray-900 font-semibold'>Bo is a Superhost</h1>
                    <p className='text-gray-700 text-xl'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>

                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl text-gray-900 font-semibold'>Co-hosts</h1>
                        <div className='flex items-center gap-4'>
                            <img src={icon1} className='w-10 h-10 object-cover rounded-full' />
                            <h1 className='text-xl text-gray-900 font-normal'>Saima</h1>
                        </div>

                        <div className='flex flex-col gap-4 items-start'>
                            <h1 className='text-xl text-gray-900 font-semibold'>Host details</h1>
                            <div className='flex flex-col'>
                                <span className='text-gray-800'>Response rate: 100%</span>
                                <span className='text-gray-800'>Responds within an hour</span>
                            </div>

                            <button className='bg-gray-800 text-white py-2 px-4 rounded-md font-semibold '>Message Host</button>
                        </div>
                        <hr className='py-2 mt-5' />
                        <div className='flex items-center gap-4'>
                        <MdOutlinePrivacyTip className='text-3xl text-gray-900' />
                            <span className='text-sm text-gray-900 font-normal'>
                                To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
                            </span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default HostDetail;
