import React from 'react'
import leftImage from '../../assets/comment/leftImage.avif'
import rightImage from '../../assets/comment/rightImage.avif'
import { FaShower } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import icon1 from '../../assets/individualPageImages/icons/icon1.jpeg'


const CommentSection = () => {
    return (
        <div className='w-full'>
            <div className='w-[90%] m-auto '>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <div className='flex justify-center items-start gap-4'>
                        <img src={leftImage} alt="" className='w-28' />
                        <h1 className='font-semibold text-9xl'>4.96</h1>
                        <img src={rightImage} alt="" className='w-28' />
                    </div>
                    <div className='flex items-center flex-col'>
                        <h1 className='font-semibold text-3xl font-gray-800'>Guest favorite</h1>
                        <p className='text-gray-700 text-xl text-center'>This home is in the <span className='font-bold text-gray-900'>top 5%</span> of eligible listings <br /> based on ratings, reviews, and reliability</p>
                    </div>
                </div>

                <div className='flex flex-wrap justify-between gap-4 mt-8'>
                    <div className='flex flex-col gap-2 border-r-[1px] border-gray-300 pr-9'>
                        <h1 className='font-semibold text-gray-800'>Overall reating</h1>
                        <div className='flex justify-center items-center gap-3 '>
                            <div className='flex flex-col'>
                                <span>5</span><span>4</span><span>3</span><span>2</span><span>1</span>
                            </div>
                            <div className='flex flex-col gap-5 w-full '>
                                <div className='w-[100%] h-1 bg-gray-300'><div className='w-[95%] h-1 bg-gray-500'></div></div>
                                <div className='w-[100%] h-1 bg-gray-300'><div className='w-[20%] h-1 bg-gray-500'></div></div>
                                <div className='w-[100%] h-1 bg-gray-300'></div>
                                <div className='w-[100%] h-1 bg-gray-300'></div>
                                <div className='w-[100%] h-1 bg-gray-300'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border-r-[1px] border-gray-300 pr-9'>
                        <h1 className='font-semibold text-gray-800'>Cleanliness</h1>
                        <span className='font-semibold text-gray-800'>5.0</span>
                        <FaShower className='text-3xl mt-6' />
                    </div>
                    <div className='flex flex-col gap-2 border-r-[1px] border-gray-300 pr-9'>
                        <h1 className='font-semibold text-gray-800'>Accuracy</h1>
                        <span className='font-semibold text-gray-800'>5.0</span>
                        <CiCircleCheck className='text-3xl mt-6' />
                    </div>
                    <div className='flex flex-col gap-2 border-r-[1px] border-gray-300 pr-9'>
                        <h1 className='font-semibold text-gray-800'>Check-in</h1>
                        <span className='font-semibold text-gray-800'>5.0</span>
                        <IoKeyOutline className='text-3xl mt-6' />
                    </div>
                    <div className='flex flex-col gap-2 border-r-[1px] border-gray-300 pr-9'>
                        <h1 className='font-semibold text-gray-800'>Communication</h1>
                        <span className='font-semibold text-gray-800'>5.0</span>
                        <FaRegMessage className='text-3xl mt-6' />
                    </div>
                    <div className='flex flex-col gap-2 border-r-[1px] border-gray-300 pr-9'>
                        <h1 className='font-semibold text-gray-800'>Location</h1>
                        <span className='font-semibold text-gray-800'>5.0</span>
                        <FaMapLocation className='text-3xl mt-6' />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='font-semibold text-gray-800'>Value</h1>
                        <span className='font-semibold text-gray-800'>5.0</span>
                        <GoTag className='text-3xl mt-6' />
                    </div>
                </div>

            </div>
            <hr className='my-6' />

            <div className='w-full pb-8'>
                <div className="w-[100%] m-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                    {/* Card 1 */}
                    <div className="p-4 bg-white border border-gray-300 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                            <img src={icon1} className="rounded-full w-10 h-10" alt="User" />
                            <div className="flex flex-col">
                                <h1 className="text-lg font-semibold">Yasmine</h1>
                                <span className="text-sm text-gray-500">8 years on Airbnb</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-1 text-gray-800">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className="text-sm text-gray-500">. 1 week ago</span>
                            <span className="text-sm text-gray-500">· Stayed a few nights</span>
                        </div>
                        <p className="text-gray-700">
                            We had a great time at this Airbnb in Copenhagen! The apartment was spotless. The hosts were welcoming and friendly. The location was perfect, with plenty of landmarks.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-4 bg-white border border-gray-300 rounded-lg ">
                        <div className="flex items-center gap-3 mb-3">
                            <img src={icon1} className="rounded-full w-10 h-10" alt="User" />
                            <div className="flex flex-col">
                                <h1 className="text-lg font-semibold">Yasmine</h1>
                                <span className="text-sm text-gray-500">8 years on Airbnb</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-1 text-gray-800">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className="text-sm text-gray-500">. 1 week ago</span>
                            <span className="text-sm text-gray-500">· Stayed a few nights</span>
                        </div>
                        <p className="text-gray-700">
                            We had a great time at this Airbnb in Copenhagen! The apartment was spotless. The hosts were welcoming and friendly. The location was perfect, with plenty of landmarks.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-4 bg-white border border-gray-300 rounded-lg ">
                        <div className="flex items-center gap-3 mb-3">
                            <img src={icon1} className="rounded-full w-10 h-10" alt="User" />
                            <div className="flex flex-col">
                                <h1 className="text-lg font-semibold">Yasmine</h1>
                                <span className="text-sm text-gray-500">8 years on Airbnb</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-1 text-gray-800">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className="text-sm text-gray-500">. 1 week ago</span>
                            <span className="text-sm text-gray-500">· Stayed a few nights</span>
                        </div>
                        <p className="text-gray-700">
                            We had a great time at this Airbnb in Copenhagen! The apartment was spotless. The hosts were welcoming and friendly. The location was perfect, with plenty of landmarks.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-4 bg-white border border-gray-300 rounded-lg ">
                        <div className="flex items-center gap-3 mb-3">
                            <img src={icon1} className="rounded-full w-10 h-10" alt="User" />
                            <div className="flex flex-col">
                                <h1 className="text-lg font-semibold">Yasmine</h1>
                                <span className="text-sm text-gray-500">8 years on Airbnb</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-1 text-gray-800">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className="text-sm text-gray-500">. 1 week ago</span>
                            <span className="text-sm text-gray-500">· Stayed a few nights</span>
                        </div>
                        <p className="text-gray-700">
                            We had a great time at this Airbnb in Copenhagen! The apartment was spotless. The hosts were welcoming and friendly. The location was perfect, with plenty of landmarks.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="p-4 bg-white border border-gray-300 rounded-lg ">
                        <div className="flex items-center gap-3 mb-3">
                            <img src={icon1} className="rounded-full w-10 h-10" alt="User" />
                            <div className="flex flex-col">
                                <h1 className="text-lg font-semibold">Yasmine</h1>
                                <span className="text-sm text-gray-500">8 years on Airbnb</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-1 text-gray-800">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className="text-sm text-gray-500">. 1 week ago</span>
                            <span className="text-sm text-gray-500">· Stayed a few nights</span>
                        </div>
                        <p className="text-gray-700">
                            We had a great time at this Airbnb in Copenhagen! The apartment was spotless. The hosts were welcoming and friendly. The location was perfect, with plenty of landmarks.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="p-4 bg-white border border-gray-300 rounded-lg ">
                        <div className="flex items-center gap-3 mb-3">
                            <img src={icon1} className="rounded-full w-10 h-10" alt="User" />
                            <div className="flex flex-col">
                                <h1 className="text-lg font-semibold">Yasmine</h1>
                                <span className="text-sm text-gray-500">8 years on Airbnb</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-1 text-gray-800">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className="text-sm text-gray-500">. 1 week ago</span>
                            <span className="text-sm text-gray-500">· Stayed a few nights</span>
                        </div>
                        <p className="text-gray-700">
                            We had a great time at this Airbnb in Copenhagen! The apartment was spotless. The hosts were welcoming and friendly. The location was perfect, with plenty of landmarks.
                        </p>
                    </div>
                </div>
                <button className='bg-gray-200 py-2 px-4 rounded-md font-semibold ml-[65px] '>Show All reviews</button>
                <hr className='mt-8' />
            </div>

            <div className='w-full m-auto pb-10'>
                <h1 className='text-3xl font-semibold'>Where you’ll be</h1>
                <div className="mapswrapper" style={{ position: 'relative', backgroundColor: '#fff' }}>
                    <iframe
                        width="100%"
                        height="500"
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Islamabad&zoom=10&maptype=roadmap"
                        style={{ border: 0, position: 'relative', zIndex: 2 }}
                    />
                    <div className='flex flex-col gap-3 flex-wrap items-start'>
                        <h1 className='text-xl font-semibold text-gray-700'>Copenhagen, Denmark</h1>
                        <p className='text-gray-700 text-base'>very good neighborhood with lots of nice restaurants/bars and tourist attractions just 2mins away.</p>
                        <button className='bg-gray-200 py-2 px-4 rounded-md font-semibold underline'>Show More...</button>
                    </div>
                </div>
            </div>
            <hr className='mb-7' />
        </div>
    )
}

export default CommentSection