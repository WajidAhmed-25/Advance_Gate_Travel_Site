
import React from 'react';
import './Home.css'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import logoos from './fdf.png'
import 'react-datepicker/dist/react-datepicker.css';






const My_Home = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
 // style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.4)' }}
  return (
    <div className="flex flex-col md:min-h-screen h-fit ">
  <div className="video_div"> 
  <video 
    className="absolute object-cover min-w-full min-h-full "
    src="https://pdftowebp.com/wp-content/uploads/travel_site%20(1).mp4"
    autoPlay
    muted
    loop
  ></video>
        <main className="flex-grow bg-transparent bg-opacity-50 bg-center bg-cover ">
          <div className="container px-4 py-16 mx-auto mt-8 xxs:mt-2 md:-mt-2 sm:mt-20 xs:mt-12 max-xxs:mt-4">
            <div className="px-4 mb-8 text-center xxs:mb-4 ">
 <h1
  className="relative mb-2 pt-8 md:pt-8 text-4xl font-bold text-[#f58d03] sm:text-6xl md:text-9xl xxs:text-5xl -z-[1]"
 style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}
>
  Escape to Your
</h1> 
  <br/>
  <h2 className="text-3xl font-bold text-[#007fac] xxs:text-3xl sm:text-4xl md:text-6xl -z-[1] relative"
 style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}
 >
    Dream Destination
  </h2>
  <p     className="mt-4 text-sm font-semibold tracking-wide text-white sm:text-base md:text-xl"   style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Discover Amazing Places At Exclusive Deals
  </p>
</div>
            <div className="max-w-4xl mx-auto bg-transparent">
         <div className="flex flex-wrap justify-center py-3 mt-6 mb-2 space-x-8 space-y-2 sm:space-x-6 md:space-x-6 lg:space-x-6">
  <button className="font-semibold border-white/70 border-2 pl-6 pr-6 rounded-3xl bg-[#007fac] p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white  transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Hotel
  </button>
  <button className="font-semibold border-white/70 border-2 pl-6 pr-6 rounded-3xl bg-[#007fac] p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white  transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Tour
  </button>
  <button className="font-semibold border-white/70 border-2 pl-6 pr-6 rounded-3xl bg-[#007fac] p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white  transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Activity
  </button>
  <button className="font-semibold border-white/70 border-2 pl-6 pr-6 rounded-3xl bg-[#007fac] p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white  transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Holiday Rentals
  </button>
  <button className="font-semibold border-white/70 border-2 pl-6 pr-6 rounded-3xl bg-[#007fac] p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white  transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Car
  </button>
  <button className="font-semibold border-white/70 border-2 pl-6 pr-6 rounded-3xl bg-[#007fac] p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white  transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Cruise
  </button>
  <button className="font-semibold border-white/70 border-2 pl-6 pr-6 rounded-3xl bg-[#007fac] p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white  transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Flights
  </button>
</div>


{/* <div className="flex flex-col mt-12 sm:flex-row items-center justify-between bg-pink-400 p-2 xs:w-[80%] xxs:w-full max-xxs:bg-white xxs:p-2.5 rounded-full shadow-lg w-full sm:w-[90%] mx-auto  space-y-4 sm:space-y-0">
  */}
 <div className="flex flex-col mt-12 md:mb-32 sm:flex-row items-center justify-between border-2 border-[#f58d03] bg-white p-2 xs:w-[80%] xxs:w-full max-xxs:bg-white xxs:p-2.5 rounded-full shadow-lg w-full sm:w-[90%] mx-auto space-y-4 sm:space-y-0 relative z-10">
 
  <div className="flex flex-col w-full text-left sm:w-1/3 xs:w-[70%] items-center xxs:justify-center">
    <label className="text-gray-700 text-[14px] sm:text-xs lg:text-sm xs:underline xs:underline-offset-2 font-bold lg:no-underline md:no-underline">
      Location
    </label>
    <input
      type="text"
      placeholder="Where are you going?"
      className="placeholder:pl-6 text-[11px] sm:text-xs xs:w-[70%] xxs:w-full xxs:text-center xs:text-center lg:text-[13px] bg-transparent outline-none text-gray-900 mt-1 w-full"
    />
  </div>

  {/* Divider for larger screens */}
  <div className="hidden h-10 border-l border-gray-300 sm:block"></div>

  <div className="flex flex-col w-full sm:w-1/3 xs:w-[70%] items-center xxs:justify-center">
    <label className="text-gray-700 text-[11px] sm:text-xs lg:text-sm font-bold xs:underline xs:underline-offset-2 lg:no-underline md:no-underline">
      Check in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Check out
    </label>
    <div className="flex justify-between w-full mt-1 text-center z-100">
      <DatePicker
        selected={checkInDate}
        onChange={(date) => setCheckInDate(date)}
        selectsStart
        startDate={checkInDate}
        endDate={checkOutDate}
        placeholderText="Check in"
        className="text-[11px] sm:text-xs cursor-pointer lg:text-[13px] xxs:text-center xs:w-[70%] xxs:w-full placeholder:pl-4 sm:text-[9.5px] w-[48%] outline-none text-gray-900"
      />
      <p>-</p>
      <DatePicker
        selected={checkOutDate}
        onChange={(date) => setCheckOutDate(date)}
        selectsEnd
        startDate={checkInDate}
        endDate={checkOutDate}
        minDate={checkInDate}
        placeholderText="Check out"
        className="text-[11px] cursor-pointer sm:text-xs lg:text-[13px] xxs:text-center xs:w-[70%] xxs:w-full placeholder:pl-4 sm:text-[9.5px] w-[48%] outline-none text-gray-900"
      />
    </div>
  </div>

  {/* Divider for larger screens */}
  <div className="hidden h-10 border-l border-gray-300 sm:block"></div>

  <div className="flex flex-col w-full sm:w-1/3 xs:w-[70%] items-center xxs:justify-center">
    <label className="text-gray-700 text-[11px] sm:text-xs lg:text-sm font-bold xs:underline lg:no-underline xs:underline-offset-2 md:no-underline">
      Guest
    </label>
    <input
      type="text"
      value="2 adults - 1 child - 1 room"
      className="placeholder:ml-2 text-[11px] xs:w-[70%] xxs:w-full xxs:text-center xxs:bg-transparent xs:text-center sm:text-xs lg:text-[13px] ml-6 outline-none text-gray-900 mt-1 w-full"
    />
  </div>

  <button className="bg-blue-800 xxs:w-[30%] xxs:mt-2 xs:w-[30%] xxs:bg-[#007fac] xs:py-2.5 xxs:px-4 xs:text-[13px] sm:bg-[#007fac] sm:px-4 sm:py-2.5 md:px-6 md:py-4 lg:bg-[#007fac] lg:px-8 text-white text-[11px] sm:text-sm font-medium py-4 px-6 rounded-full w-full sm:w-auto">
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






