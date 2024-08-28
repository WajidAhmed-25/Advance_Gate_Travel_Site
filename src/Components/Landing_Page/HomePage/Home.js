
import React from 'react';
import './Home.css'

import video from './v1.mp4';


const My_Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
  

  <div className="video_div"> 
  <video 
    className="absolute object-cover min-w-full min-h-full"
    src={video}
    autoPlay
    muted
    loop
  ></video>




<nav className="w-full px-4 py-2 pt-4 bg-transparent xxs:pt-3 xs:pt-4 sm:pt-6 md:pt-8 lg:pt-10 xxs:py-2 sm:py-3 md:py-4 lg:py-5 xxs:px-2 sm:px-6">
  <ul className="flex flex-wrap justify-center text-xs font-medium xxs:space-x-1 xs:space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 xxs:text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg">
    <li className="pb-1">
      <a href="#" className="text-black border-b-2 border-black ">
        HOME
      </a>
    </li>
    <li className="pb-1">
      <a
        href="#"
        className="text-black transition-all duration-200 hover:border-b-2 hover:border-black"
      >
        ABOUT US
      </a>
    </li>
    <li className="pb-1">
      <a
        href="#"
        className="text-black transition-all duration-200 hover:border-b-2 hover:border-black"
      >
        CHARTER FLIGHTS
      </a>
    </li>
    <li className="pb-1">
      <a
        href="#"
        className="text-black transition-all duration-200 hover:border-b-2 hover:border-black"
      >
        REGULAR FLIGHTS
      </a>
    </li>
    <li className="pb-1">
      <a
        href="#"
        className="text-black transition-all duration-200 hover:border-b-2 hover:border-black"
      >
        NEWS
      </a>
    </li>
    <li className="pb-1">
      <a
        href="#"
        className="text-black transition-all duration-200 hover:border-b-2 hover:border-black"
      >
        BLOG
      </a>
    </li>
    <li className="pb-1">
      <a
        href="#"
        className="text-black transition-all duration-200 hover:border-b-2 hover:border-black"
      >
        CONTACT US
      </a>
    </li>
    <li className="pb-1">
      <a
        href="#"
        className="text-black transition-all duration-200 hover:border-b-2 hover:border-black"
      >
        DESTINATION
      </a>
    </li>
  </ul>
</nav> 



        <main className="flex-grow bg-transparent bg-opacity-50 bg-center bg-cover ">
          <div className="container px-4 py-16 mx-auto mt-8 xxs:mt-2 md:mt-8 sm:mt-20 xs:mt-12 max-xxs:mt-4">
            <div className="px-4 mb-8 text-center xxs:mb-4 ">
  <h1 className="mb-2 text-4xl font-bold sm:text-5xl md:text-6xl xxs:text-3xl">
    Escape to Your
  </h1>
  <h2 className="text-3xl font-bold text-blue-600 xxs:text-3xl sm:text-4xl md:text-5xl">
    Dream Destination
  </h2>
  <p className="mt-4 text-sm text-gray-700 sm:text-base md:text-lg">
    Discover amazing places at exclusive deals
  </p>
</div>
            <div className="max-w-4xl mx-auto bg-transparent">
            <div className="flex flex-wrap justify-center py-3 mt-6 mb-2 space-x-3 sm:space-x-6 md:space-x-8 lg:space-x-12">
  <button className="font-semibold text-black text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] hover:text-blue-600">
    Hotel
  </button>
  <button className="font-semibold text-black text-[11px] sm:text-[12px] md:text-[13px] hover:text-blue-600 lg:text-[15px]">
    Tour
  </button>
  <button className="font-semibold text-black text-[11px] sm:text-[12px] md:text-[13px] hover:text-blue-600 lg:text-[15px]">
    Activity
  </button>
  <button className="font-semibold text-black text-[11px] sm:text-[12px] md:text-[13px] hover:text-blue-600 lg:text-[15px]">
    Holiday Rentals
  </button>
  <button className="font-semibold text-black text-[11px] sm:text-[12px] md:text-[13px] hover:text-blue-600 lg:text-[15px]">
    Car
  </button>
  <button className="font-semibold text-black text-[11px] sm:text-[12px] md:text-[13px] hover:text-blue-600 lg:text-[15px]">
    Cruise
  </button>
  <button className="font-semibold text-black text-[11px] sm:text-[12px] md:text-[13px] hover:text-blue-600 lg:text-[15px]">
    Flights
  </button>
</div>
         
              <div className="flex flex-col  sm:flex-row items-center justify-between bg-white p-2 xs:w-[80%] xxs:w-full  max-xxs:bg-white xxs:p-2.5    rounded-full shadow-lg w-full sm:w-[90%] mx-auto mt-6 space-y-4 sm:space-y-0">
  <div className="flex flex-col w-full text-left  sm:w-1/3 xs:w-[70%] items-center xxs:justify-center ">
    <label className="text-gray-700 text-[14px] sm:text-xs lg:text-sm xs:underline xs:underline-offset-2 font-bold lg:no-underline md:no-underline">Location</label>
    <input
      type="text"
      placeholder="Where are you going?"
      className="placeholder:pl-6 text-[11px] sm:text-xs xs:w-[70%] xxs:text-center xs:text-center lg:text-[13px] lg:text-sm bg-transparent outline-none sm:text-[9.5px] text-gray-900 mt-1 w-full "
    />
  </div>

  <div className="hidden h-10 border-l border-gray-300 sm:block"></div>

  <div className="flex flex-col w-full   sm:w-1/3 xs:w-[70%] items-center xxs:justify-center">
    <label className="text-gray-700 text-[11px] sm:text-xs lg:text-sm font-bold xs:underline xs:underline-offset-2 lg:no-underline md:no-underline ">Check in - Check out</label>
    <input
      type="text"
      value="Wed 2 Mar - Fri 11 Apr"
      className="text-[11px] sm:text-xs lg:text-[13px] xxs:text-center xs:w-[70%] xxs:bg-transparent xs:text-center  placeholder:pl-4 sm:text-[9.5px] ml-6 outline-none text-gray-900 mt-1 w-full "
    />
  </div>

  <div className="hidden h-10 border-l border-gray-300 sm:block"></div>

  <div className="flex flex-col w-full text-left  sm:w-1/3 xs:w-[70%] items-center xxs:justify-center">
    <label className="text-gray-700 text-[11px] sm:text-xs lg:text-sm font-bold xs:underline lg:no-underline xs:underline-offset-2 md:no-underline ">Guest</label>
    <input
      type="text"
      value="2 adults - 1 child - 1 room"
      className="placeholder:ml-2 text-[11px] xs:w-[70%] xxs:text-center xxs:bg-transparent xs:text-center sm:text-xs lg:text-[13px] ml-6 sm:text-[9px] outline-none text-gray-900 mt-1 w-full"
    />
  </div>

  <button className="bg-blue-600 xxs:w-[30%] xxs:mt-2  xs:w-[30%] xxs:bg-blue-600 xs:py-2.5 xxs:px-4 xs:text-[13px] xs:bg-blue-600  sm:bg-blue-600  sm:px-4 sm:py-2.5 md:px-6 md:py-4 md:bg-blue-600  lg:bg-blue-600  lg:px-8  sm:ml-2  text-white text-[11px] sm:text-sm font-medium py-4 px-6 rounded-full w-full sm:w-auto">
    Search
  </button>
</div>



            </div>
          </div>
        </main>


        
       </div>











      
    </div>





  );
};
export default My_Home;






