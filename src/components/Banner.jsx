import React from 'react'
import travelImg from "../assets/travel.png"
import {MdFlight, MdOutlineLocalHotel} from "react-icons/md"
import {IoIosWifi} from "react-icons/io"
import {IoFastFoodSharp} from "react-icons/io5"
const Banner = () => {
  return (
    <>
    <div className='min-h-[550px] bg-gray-100 '>
        <div className='min-h-[550px] flex 
        justify-center items-center backdrop-blur-xl
        py-12 sm:py-0 '>
            <div className="container">
                <div className="grid
                grid-cols-1 sm:grid-cols-2
                gap-6 items-center">
                    <div >
                        <img src={travelImg} alt=''
                        className='max-w-[450px]
                        h-[350px] w-full mx-auto
                        drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)]
                        object-cover'/>
                    </div>
                <div className='className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16'>
                    <h1 data-aos="fade-up"
                    className='text-3xl font-bold sm:text-4xl
                    '>
                        Explore all the corners of the world
                        with us

                    </h1>
                    <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide
                    leading-8'>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Culpa distinctio
                        harum quis ad corrupti, repellat
                        sapiente vel nam, ducimus vero enim 
                        rem soluta pariatur consequatur sunt error
                        temporibus fugiat magni.
                        <br/>
                    </p>
                <div data-aos="zoom-in" className='grid grid-cols-2 gap-6'>
                    <div className='space-y-6 '>
                        <div className='flex items-center gap-4'>
                            <MdFlight className="
                            text-4xl h-12 w-12
                            shadow-sm p-4 rounded-full 
                            bg-violet-100
                           "/>
                            <p>
                                Flight
                            </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <MdOutlineLocalHotel className="
                            text-4xl h-12 w-12
                            shadow-sm p-4 rounded-full 
                            bg-orange-100
                           "/>
                            <p>
                                Hotel
                            </p>
                        </div>
                        </div>
                    <div className="space-y-6">
                        <div className='flex items-center gap-4'>
                            <IoIosWifi className="
                            text-4xl h-12 w-12
                            shadow-sm p-4 rounded-full 
                            bg-green-100
                           "/>
                            <p>
                                Wifi
                            </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <IoFastFoodSharp className="
                            text-4xl h-12 w-12
                            shadow-sm p-4 rounded-full 
                            bg-yellow-100
                           "/>
                            <p>
                                Food
                            </p>
                        </div>
        
                    </div>
                </div>
                </div>
                </div>
            </div>

        </div>
    </div>
    </>
  );
};

export default Banner;
