
import React from 'react';
import './Home.css'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import logoos from './fdf.png'
import 'react-datepicker/dist/react-datepicker.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faPlane, faShip, faCar, faSuitcaseRolling, faHiking, faHome } from '@fortawesome/free-solid-svg-icons';



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
          <div className="px-4 py-16 mx-auto mt-8 xxs:mt-2 md:-mt-2 sm:mt-20 xs:mt-12 max-xxs:mt-4">
            <div className="px-4 mb-8 text-center xxs:mb-4 ">
              <h1
                className="relative mb-2 pt-8 md:pt-8 text-4xl font-bold text-[#f58d03] sm:text-6xl md:text-9xl xxs:text-5xl -z-[1]"
                style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}
              >
                Escape to Your
              </h1>
              <br />
              <h2 className="text-3xl font-bold text-[#007fac] xxs:text-3xl sm:text-4xl md:text-6xl -z-[1] relative"
                style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}
              >
                Dream Destination
              </h2>
              <p className="mt-4 text-sm font-semibold tracking-wide text-white sm:text-base md:text-xl" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
                Discover Amazing Places At Exclusive Deals
              </p>
            </div>
            <div className="mx-auto max-w-7xl">



              {/* <div className="grid items-center grid-cols-2 gap-6 py-2 pl-6 mt-6 mb-2 md:pl-28 md:gap-32 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
  <button className="flex  font-semibold justify-center items-center border-2 pl-6 pr-6 rounded-3xl w-32 bg-[#007fac] py-2 md:py-2.5 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white transition-all duration-200 hover:scale-125 border-[#f58d03] border-2 hover:border-[#007fac]" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
  <FontAwesomeIcon icon={faHotel} className="mr-2" />
    Hotel
  </button>
  <button className="flex items-center font-semibold border-2 pl-6 pr-6 w-32 justify-center rounded-3xl bg-[#007fac] py-2 md:py-2.5 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white transition-all duration-200 hover:scale-125 border-[#f58d03] border-2 hover:border-[#007fac]" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
  <FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" />
    Tour
  </button>
  <button className="flex items-center font-semibold border-2 pl-6 pr-6 w-32 justify-center rounded-3xl bg-[#007fac] py-2 md:py-2.5 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white transition-all duration-200 hover:scale-125 border-[#f58d03] border-2 hover:border-[#007fac]" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
  <FontAwesomeIcon icon={faHiking} className="mr-2" /> 
    Activity
  </button>
  <button className="flex items-center font-semibold border-2 pl-6 pr-6 w-32 justify-center rounded-3xl bg-[#007fac] py-2 md:py-2.5 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white transition-all duration-200 hover:scale-125 border-[#f58d03] border-2 hover:border-[#007fac]" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
  <FontAwesomeIcon icon={faHome} className="mr-2" />
    Holiday 
  </button>
  <button className="flex items-center font-semibold border-2 pl-6 pr-6 w-32 justify-center rounded-3xl bg-[#007fac] py-2 md:py-2.5 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white transition-all duration-200 hover:scale-125 border-[#f58d03] border-2 hover:border-[#007fac]" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
  <FontAwesomeIcon icon={faCar} className="mr-2" />
    Car
  </button>

  <button className="flex items-center font-semibold border-2 pl-6 pr-6 w-32 justify-center rounded-3xl bg-[#007fac] py-2 md:py-2.5 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:bg-[#f58d03] hover:text-white transition-all duration-200 hover:scale-125 border-[#f58d03] border-2 hover:border-[#007fac]" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
  <FontAwesomeIcon icon={faPlane} className="mr-2" />
    Flights
  </button>
</div> */}




              <div className="flex flex-col mt-12 md:mb-32 pt-6 sm:flex-row items-center justify-between border-2 border-[#f58d03] bg-white p-2 xs:w-[40%] xxs:w-full max-xxs:bg-white xxs:p-2.5 rounded-xl md:rounded-full shadow-lg w-full sm:w-[80%] mx-auto space-y-4 sm:space-y-0 relative z-10">

                <div className="flex flex-col w-full text-left sm:w-[45%] xs:w-[70%]  items-center xxs:justify-center md:pt-0 pt-2 pb-4 md:pb-0">
                  <label className="text-gray-700 text-[24px] sm:text-lg lg:text-sm xs:underline xs:underline-offset-2 font-bold lg:no-underline md:no-underline">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="placeholder:pl-2 text-[11px] border-2 border-[#f58c038d] border-dashed p-2 rounded-md sm:text-xs xs:w-[70%] xxs:w-full xxs:text-center xs:text-center lg:text-[13px] bg-transparent outline-none text-gray-900 mt-1 w-full"
                  />
                </div>

                {/* Divider for larger screens */}
                <div className="hidden h-10 border-l border-gray-300 sm:block"></div>

                <div className="flex flex-col md:pt-2 w-full sm:w-1/3 xs:w-[70%] items-center xxs:justify-center ">
                  {/* <label className="text-gray-700 text-[18px] sm:text-xs lg:text-sm font-bold xs:underline xs:underline-offset-2 lg:no-underline md:no-underline">
      Check in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Check out
    </label> */}
                  <div className="flex flex-col justify-between w-full -mt-2 space-y-6 text-center md:space-y-0 md:flex-row z-100">
                    <div className='space-x-4 space-y-2'>
                      <label className="text-gray-700 text-[18px] pb-2 sm:text-xs lg:text-sm font-bold xs:underline xs:underline-offset-2 lg:no-underline md:no-underline">
                        Check in
                      </label>
                      <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        selectsStart
                        startDate={checkInDate}
                        endDate={checkOutDate}
                        placeholderText="Check in"
                        className="text-[14px] sm:text-xs border-2 border-[#f58c038d] border-dashed p-2 rounded-md cursor-pointer lg:text-[13px] xxs:text-center xs:w-[70%] xxs:w-full placeholder:pl-0 sm:text-[9.5px] w-[48%] outline-none text-gray-900"
                      />
                    </div>
                    {/* <p className='text-gray-500'>----</p> */}
                    <div className='space-x-4 space-y-2'>
                      <label className="text-gray-700 text-[18px] sm:text-xs lg:text-sm font-bold xs:underline xs:underline-offset-2 lg:no-underline md:no-underline">
                        Check out
                      </label>
                      <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        selectsEnd
                        startDate={checkInDate}
                        endDate={checkOutDate}
                        minDate={checkInDate}
                        placeholderText="Check out"
                        className="text-[14px] cursor-pointer -ml-2 sm:text-xs border-2 p-2 border-[#f58c038d] border-dashed rounded-md lg:text-[13px] xxs:text-center xs:w-[70%] xxs:w-full placeholder:pl-0 sm:text-[9.5px] w-[48%] outline-none text-gray-900"
                      />
                    </div> 

                  </div>
                </div>

                {/* Divider for larger screens */}
                <div className="hidden h-10 border-l border-gray-300 sm:block"></div>

                <div className="flex flex-col  w-full sm:w-1/3 xs:w-[70%] items-center xxs:justify-center  ">
                  <label className="text-gray-700 text-[18px] sm:text-xs lg:text-sm mt-2 md:mt-0 font-bold xs:underline lg:no-underline xs:underline-offset-2 md:no-underline">
                    Guest
                  </label>
                  <input
                    type="text"
                    value="2 adults - 1 child - 1 room"
                    className="placeholder:ml-2 mb-6 md:mb-0 text-[11px] border-[#f58c038d] rounded-md border-dashed p-2  border-2 xs:w-[70%] xxs:w-full xxs:text-center xxs:bg-transparent xs:text-center sm:text-xs lg:text-[13px] ml-6 outline-none text-gray-900 mt-1 w-full"
                  />
                </div>

                <button className="bg-blue-800 xxs:w-[60%]  xxs:mt-5 xs:w-[30%] xxs:bg-[#007fac] border-[#f58d03] border-2 xs:py-2.5 xxs:px-4 xs:text-[15px] sm:bg-[#007fac] sm:px-4 sm:py-2.5 md:px-6 md:py-4 lg:bg-[#007fac] lg:px-8 text-white text-[16px] sm:text-sm font-medium py-4 px-6 rounded-full w-full sm:w-auto">
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






