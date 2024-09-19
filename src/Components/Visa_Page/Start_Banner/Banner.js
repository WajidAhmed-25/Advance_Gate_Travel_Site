// import React, { useState } from 'react';
// import { FaCalendarAlt } from 'react-icons/fa';
// export default function My_Banner(){
//     const [passportCountry, setPassportCountry] = useState('UNITED STATES (USA)');
//     const [destination, setDestination] = useState('ISTANBUL, TURKEY');
//     const [tripPurpose, setTripPurpose] = useState('');
//     const [dates, setDates] = useState({
//       startDate: 'Fri, Aug 20',
//       endDate: 'Mon, Sept 29',
//     });
//   return (
// <>
// <div className="relative flex flex-col items-center justify-center  z-10 bg-center bg-no-repeat bg-cover h-[800px] " style={{ backgroundImage: `url('https://images.unsplash.com/photo-1614427771426-50fa133eebcf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
// <div class="absolute inset-0 bg-white opacity-60"></div>
// <div className='absolute top-0 left-0 w-full '>
//   <div className="container flex items-center justify-center px-4 py-3 mx-auto">
//     <nav className='pt-4 '>
//       <ul className="flex flex-wrap justify-center space-x-0 md:space-x-12">
//         <li className="px-2 mb-2 md:px-0 ">
//           <a href="/" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
//             Home
//           </a>
//         </li>
//         <li className="px-2 mb-4 md:px-0">
//           <a href="/visa" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
//           Visa Portal
//           </a>
//         </li>
//         <li className="px-2 mb-4 md:px-0">
//           <a href="/visa_application" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
//             Visa Application
//           </a>
//         </li>
//         <li className="px-2 mb-4 md:px-0">
//           <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
//             Regular Flights
//           </a>
//         </li>
//         <li className="px-2 mb-4 md:px-0">
//           <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
//             News
//           </a>
//         </li>
//         <li className="px-2 mb-4 md:px-0">
//           <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
//             Blog
//           </a>
//         </li>
//         <li className="px-2 mb-4 md:px-0">
//           <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
//             Contact Us
//           </a>
//         </li>
//         <li className="px-2 mb-4 md:px-0">
//           <a href="#" className="text-[14px] xxs:text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lgg:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] hover:underline-offset-8 font-normal text-black hover:underline hover:font-semibold">
//             Destination
//           </a>
//         </li>
//       </ul>
//     </nav>
//   </div>
// </div>
//       <div className="relative z-10 lg:-mt-32    text-center text-white w-[80%] max-md:mt-40 max-md:mb-4 max-md:w-[60%] ">
//       <div className="text-center">
//   <h1 className="text-3xl xxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-[67px] font-medium text-gray-900">
//     Visas Made
//     <span className="font-medium text-blue-800"> Easier</span>
//   </h1>
//   <p className="mt-4 text-base text-gray-600 xxs:text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl">
//     Accurate and Expedited Visa and Passport Solutions
//   </p>
// </div>
// <div className="flex flex-col items-center justify-center w-full p-4 mt-8 space-y-4 bg-white rounded-lg shadow-lg sm:p-6 md:p-8 sm:mt-10 md:mt-12 md:space-y-0 md:space-x-4 lg:space-x-8 bg-opacity-30 backdrop-blur-md md:flex-row">
//   <div className="flex flex-col w-full md:w-[22%] lg:w-[18%]">
//     <label className="text-xs font-semibold text-gray-700 md:text-sm">My Passport is from</label>
//     <select value={passportCountry} onChange={(e) => setPassportCountry(e.target.value)} className="p-2.5 mt-1 text-center text-white bg-blue-800 md:mt-2">
//       <option>UNITED STATES (USA)</option>
//     </select>
//   </div>
//   <div className="flex flex-col w-full md:w-[22%] lg:w-[18%]">
//     <label className="text-xs font-semibold text-gray-700 md:text-sm">I am going to</label>
//     <select value={destination} onChange={(e) => setDestination(e.target.value)} className="p-2.5 mt-1 text-center text-white bg-blue-800 md:mt-2">
//       <option>ISTANBUL, TURKEY</option>
//     </select>
//   </div>
//   <div className="flex flex-col w-full md:w-[22%] lg:w-[18%]">
//     <label className="text-xs font-semibold text-gray-700 md:text-sm">My purpose of trip</label>
//     <select value={tripPurpose} onChange={(e) => setTripPurpose(e.target.value)} className="p-2.5 mt-1 text-center text-white bg-blue-800 md:mt-2">
//       <option value="" disabled>Select One</option>
//     </select>
//   </div>
//   <div className="flex flex-col w-full md:w-[26%] lg:w-[23%]">
//     <label className="text-xs font-semibold text-gray-700 md:text-sm">Date of Entry/Departure</label>
//     <div className="relative">
//       <input
//         type="text"
//         value={`${dates.startDate} - ${dates.endDate}`}
//         onChange={() => {}}
//         className="w-full p-2.5 mt-1 text-center text-white bg-blue-800 md:mt-2"
//       />
//       <FaCalendarAlt className="absolute text-white transform -translate-y-1/2 right-2 top-[55%]" />
//     </div>
//   </div>
// <div className=''>
//   <button class="bg-blue-800 rounded-full  w-48 h-12  mt-[22px] text-white font-semibold">
//     <div class="flex gap-3 justify-center items-center">
//       <span class="text-md">Get Visa Options</span>
//     </div>
// </button>
// </div>
// </div>
//       </div>
//     </div>
// </>
//   )
// }

















import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default function My_Banner() {
  const [passportCountry, setPassportCountry] = useState('UNITED STATES (USA)');
  const [destination, setDestination] = useState('ISTANBUL, TURKEY');
  const [tripPurpose, setTripPurpose] = useState('');

  const [dates, setDates] = useState({
    startDate: new Date('2023-08-20'),
    endDate: new Date('2023-09-29'),
  });

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setDates({ startDate: start, endDate: end });
  };

  const countries = [
    'UNITED STATES (USA)',
    'CANADA',
    'UNITED KINGDOM',
    'AUSTRALIA',
    'GERMANY',
  ];

  const destinations = [
    'ISTANBUL, TURKEY',
    'PARIS, FRANCE',
    'LONDON, UK',
    'NEW YORK, USA',
    'DUBAI, UAE',
  ];

  const purposes = [
    'Tourism',
    'Business',
    'Study',
    'Family Visit',
    'Medical',
  ];


  //   #f58d03 yellow

// #007fac blue

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center z-10 bg-center bg-no-repeat bg-cover h-[800px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1614427771426-50fa133eebcf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-white opacity-60"></div>


        <div className="relative z-10 lg:-mt-32 text-center text-white w-[80%] max-md:mt-32 max-md:mb-4 max-md:w-[60%]">
          <div className="text-center">
            <h1 className=" xxs:text-5xl xs:text-4xl sm:text-6xl md:text-5xl lg:text-2xl text-3xl font-medium text-[#007fac]">
              Visas Made
              <span className="font-medium text-[#f58d03]"> Easier</span>
            </h1>
            <p className="mt-4 text-base text-gray-600 xxs:text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl">
              Accurate and Expedited Visa and Passport Solutions
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-4 mt-8 space-y-4 bg-white rounded-lg shadow-lg sm:p-6 md:p-8 sm:mt-10 md:mt-12 md:space-y-0 md:space-x-4 lg:space-x-8 bg-opacity-30 backdrop-blur-md md:flex-row">
            <div className="flex flex-col w-full md:w-[22%] lg:w-[18%]">
              <label className="text-xs font-semibold text-gray-700 md:text-sm">My Passport is from</label>
              <select
                value={passportCountry}
                onChange={(e) => setPassportCountry(e.target.value)}
                className="p-2.5 mt-1 text-center text-white bg-[#007fac] md:mt-2 rounded-md focus:ring cursor-pointer"
              >
                {countries.map((country, index) => (
                  <option key={index} value={country} className='text-sm font-semibold text-center hover:bg-[#f58d03] hover:text-[#007fac]  text-[#007fac] bg-white cursor-pointer'>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full md:w-[22%] lg:w-[18%] ">
              <label className="text-xs font-semibold text-gray-700 md:text-sm">I am going to</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="p-2.5 mt-1 text-center text-white bg-[#007fac] md:mt-2 rounded-md focus:ring cursor-pointer"
              >
                {destinations.map((place, index) => (
                  <option key={index} value={place} className='text-sm font-semibold text-center text-[#007fac] bg-white cursor-pointer hover:bg-[#f58d03] hover:text-[#007fac]'>
                    {place}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full md:w-[22%] lg:w-[18%]">
              <label className="text-xs font-semibold text-gray-700 md:text-sm">My purpose of trip</label>
              <select
                value={tripPurpose}
                onChange={(e) => setTripPurpose(e.target.value)}
                className="p-2.5 mt-1 text-center text-white bg-[#007fac] md:mt-2 rounded-md focus:ring cursor-pointer"
              >
                {purposes.map((purpose, index) => (
                  <option key={index} value={purpose} className=' font-semibold text-center text-[#007fac] bg-white cursor-pointer text-md hover:bg-[#f58d03] hover:text-[#007fac]'>
                    {purpose}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full md:w-[26%] lg:w-[23%]">
              <label className="text-xs font-semibold text-gray-700 md:text-sm">Date of Entry/Departure</label>
              <div className="relative">
                <DatePicker
                  selected={dates.startDate}
                  onChange={handleDateChange}
                  startDate={dates.startDate}
                  endDate={dates.endDate}
                  selectsRange
                  inline={false}
                  className="w-full p-2.5 mt-1 text-center text-white bg-[#007fac] md:mt-2 rounded-md focus:ring focus:ring-blue-400"
                  dateFormat="MM/dd/yyyy"
                />
                {/* <FaCalendarAlt className="absolute text-white transform -translate-y-1/2 right-2 top-[55%]" /> */}
              </div>
            </div>
         
      
            <div className="">
              <button className="bg-[#007fac] rounded-full w-48 h-12 mt-[22px] text-white font-bold hover:text-[#007fac] hover:bg-[#f58d03] transition-all duration-300">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-md">Get Visa Options</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}








