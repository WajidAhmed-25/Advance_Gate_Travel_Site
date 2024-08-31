

import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export default function My_Banner(){



    const [passportCountry, setPassportCountry] = useState('UNITED STATES (USA)');
    const [destination, setDestination] = useState('ISTANBUL, TURKEY');
    const [tripPurpose, setTripPurpose] = useState('');
    const [dates, setDates] = useState({
      startDate: 'Fri, Aug 20',
      endDate: 'Mon, Sept 29',
    });


  return (
<>












<div className="relative flex flex-col items-center justify-center  z-10 bg-center bg-no-repeat bg-cover h-[880px] " style={{ backgroundImage: `url('https://images.unsplash.com/photo-1614427771426-50fa133eebcf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
 
<div class="absolute inset-0 bg-white opacity-60"></div>
 

<div className='absolute top-0 left-0 w-full '>
  <div className="container flex items-center justify-center px-4 py-3 mx-auto">
    <nav className='pt-4 '>
      <ul className="flex flex-wrap justify-center space-x-0 md:space-x-12">
        <li className="px-2 mb-2 md:px-0 ">
          <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
            HOME
          </a>
        </li>
        <li className="px-2 mb-4 md:px-0">
          <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
            ABOUT US
          </a>
        </li>
        <li className="px-2 mb-4 md:px-0">
          <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
            CHARTER FLIGHTS
          </a>
        </li>
        <li className="px-2 mb-4 md:px-0">
          <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
            REGULAR FLIGHTS
          </a>
        </li>
        <li className="px-2 mb-4 md:px-0">
          <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
            NEWS
          </a>
        </li>
        <li className="px-2 mb-4 md:px-0">
          <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
            BLOG
          </a>
        </li>
        <li className="px-2 mb-4 md:px-0">
          <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
            CONTACT US
          </a>
        </li>
        <li className="px-2 mb-4 md:px-0">
          <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
            DESTINATION
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>



{/* max-lg:bg-pink-400  max-xl:bg-green-400 max-2xl:bg-orange-400 */}


  
      <div className="relative z-10 lg:-mt-24    text-center text-white w-[80%] max-md:mt-40 max-md:mb-4 max-md:w-[60%] ">
       
      <div className="text-center">
  <h1 className="text-3xl xxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-[67px] font-medium text-gray-900">
    Visas Made
    <span className="font-medium text-blue-800"> Easier</span>
  </h1>
  <p className="mt-4 text-base text-gray-600 xxs:text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl">
    Accurate and Expedited Visa and Passport Solutions
  </p>

</div>
      
      


      {/* <div className="flex flex-col items-center justify-center w-full p-4 mt-8 space-y-4 bg-white rounded-lg shadow-lg sm:p-6 md:p-8 sm:mt-10 md:mt-12 md:space-y-0 md:space-x-10 lg:space-x-16 bg-opacity-30 backdrop-blur-md md:flex-row">
  <div className="flex flex-col w-full md:w-[16%] ">
    <label className="text-sm font-semibold text-gray-700 ">My Passport is from</label>
    <select value={passportCountry} onChange={(e) => setPassportCountry(e.target.value)} className="p-2.5 mt-2 text-center text-white bg-blue-700">
      <option>UNITED STATES (USA)</option>
    </select>
  </div>

  <div className="flex flex-col w-full md:w-[16%] ">
    <label className="text-sm font-semibold text-gray-700">I am going to</label>
    <select value={destination} onChange={(e) => setDestination(e.target.value)} className="p-2.5 mt-2 text-center text-white bg-blue-700">
      <option>ISTANBUL, TURKEY</option>
    </select>
  </div>

  <div className="flex flex-col w-full md:w-[16%] ">
    <label className="text-sm font-semibold text-gray-700">My purpose of trip</label>
    <select value={tripPurpose} onChange={(e) => setTripPurpose(e.target.value)} className="p-2.5 mt-2 text-center text-white bg-blue-700">
      <option value="" disabled>Select One</option>
    </select>
  </div>

  <div className="flex flex-col w-full md:w-[16.8%] ">
    <label className="text-sm font-semibold text-gray-700">Date of Entry/Departure</label>
    <div className="relative">
      <input
        type="text"
        value={`${dates.startDate} - ${dates.endDate}`}
        onChange={() => {}}
        className="w-full p-2.5 mt-2 text-center text-white bg-blue-700"
      />
      <FaCalendarAlt className="absolute text-white transform -translate-y-1/2 right-2 top-1/2" />
    </div>
  </div>

  <button className="w-full px-4 py-4 mt-2 font-semibold text-white bg-blue-700 rounded-full shadow-md lg:py-2 lg:px-12 md:w-auto md:mt-0 hover:bg-blue-700">
    Get Visa Options
  </button>
</div> */}



<div className="flex flex-col items-center justify-center w-full p-4 mt-8 space-y-4 bg-white rounded-lg shadow-lg sm:p-6 md:p-8 sm:mt-10 md:mt-12 md:space-y-0 md:space-x-4 lg:space-x-8 bg-opacity-30 backdrop-blur-md md:flex-row">
  <div className="flex flex-col w-full md:w-[22%] lg:w-[18%]">
    <label className="text-xs font-semibold text-gray-700 md:text-sm">My Passport is from</label>
    <select value={passportCountry} onChange={(e) => setPassportCountry(e.target.value)} className="p-2.5 mt-1 text-center text-white bg-blue-800 md:mt-2">
      <option>UNITED STATES (USA)</option>
    </select>
  </div>

  <div className="flex flex-col w-full md:w-[22%] lg:w-[18%]">
    <label className="text-xs font-semibold text-gray-700 md:text-sm">I am going to</label>
    <select value={destination} onChange={(e) => setDestination(e.target.value)} className="p-2.5 mt-1 text-center text-white bg-blue-800 md:mt-2">
      <option>ISTANBUL, TURKEY</option>
    </select>
  </div>

  <div className="flex flex-col w-full md:w-[22%] lg:w-[18%]">
    <label className="text-xs font-semibold text-gray-700 md:text-sm">My purpose of trip</label>
    <select value={tripPurpose} onChange={(e) => setTripPurpose(e.target.value)} className="p-2.5 mt-1 text-center text-white bg-blue-800 md:mt-2">
      <option value="" disabled>Select One</option>
    </select>
  </div>

  <div className="flex flex-col w-full md:w-[26%] lg:w-[23%]">
    <label className="text-xs font-semibold text-gray-700 md:text-sm">Date of Entry/Departure</label>
    <div className="relative">
      <input
        type="text"
        value={`${dates.startDate} - ${dates.endDate}`}
        onChange={() => {}}
        className="w-full p-2.5 mt-1 text-center text-white bg-blue-800 md:mt-2"
      />
      <FaCalendarAlt className="absolute text-white transform -translate-y-1/2 right-2 top-[55%]" />
    </div>
  </div>


  <button class="bg-blue-800 rounded-full w-48 h-12  text-white font-semibold">
    <div class="flex gap-3 justify-center items-center">

      <span class="text-md">Get Visa Options</span>
    </div>
</button>
</div>









      </div>

      
    </div>










</>
  )
}