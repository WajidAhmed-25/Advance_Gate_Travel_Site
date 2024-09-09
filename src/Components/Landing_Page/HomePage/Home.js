
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
    <div className="flex flex-col min-h-screen ">
  

  <div className="video_div"> 
  <video 
    className="absolute object-cover min-w-full min-h-full"
    src="https://pdftowebp.com/wp-content/uploads/travel_site%20(1).mp4"
    autoPlay
    muted
    loop
  ></video>



{/* <div className='flex items-center justify-between px-8 bg-blue-900 border-b-4 border-white/80'>

  <div className='flex-shrink-0 mt-1 mb-2'>
    <img src={logoos} alt="Logo" className="w-32 h-28 " />
  </div>


  
<nav className='pt-6 pb-2'>
  <ul className="flex flex-wrap justify-center space-x-0 sm:space-x-2 md:space-x-4 lg:space-x-8 xl:space-x-6">
    {[
      { href: "/", text: "Home" },
      { href: "/visa", text: "Visa Portal" },
      { href: "/visa_application", text: "Visa Application" },
      { href: "#", text: "Regular Flights" },
      { href: "#", text: "News" },
      { href: "#", text: "Blog" },
      { href: "#", text: "Contact Us" },
      { href: "#", text: "Destination" }
    ].map((item, index) => (
      <li key={index} className="px-12 mb-4 transition-all duration-300 sm:px-2 hover:scale-125">
        <a
          href={item.href}
          className="relative hover:scale-125 transition-all duration-300 cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-[-8px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-[-8px] after:right-[50%]"
          style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)' }}
        >
          <span className="text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl hover:text-white">
            {item.text}
          </span>
        </a>
      </li>
    ))}
  </ul>
</nav>







    
</div> */}


        <main className="flex-grow bg-transparent bg-opacity-50 bg-center bg-cover ">
         
          <div className="container px-4 py-16 mx-auto mt-8 xxs:mt-2 md:-mt-2 sm:mt-20 xs:mt-12 max-xxs:mt-4">
            
            <div className="px-4 mb-8 text-center xxs:mb-4 ">
              


 <h1
  className="relative mb-2 text-4xl font-bold text-white sm:text-6xl md:text-9xl xxs:text-5xl -z-[1]"
 style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}
>
  Escape to Your
</h1> 

  <br/>
  <h2 className="text-3xl font-bold text-black xxs:text-3xl sm:text-4xl md:text-6xl -z-[1] relative"
style={{ textShadow: ' 3px 3px 3px rgba(249 241 241 / 82%)' }}
 >
  
    Dream Destination
  </h2>
  <p     className="mt-4 text-sm font-semibold tracking-wide text-white sm:text-base md:text-xl"   style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Discover Amazing Places At Exclusive Deals
  </p>
</div>
            <div className="max-w-4xl mx-auto bg-transparent">

         
         <div className="flex flex-wrap justify-center py-3 mt-6 mb-2 space-x-3 sm:space-x-6 md:space-x-8 lg:space-x-12">
  <button className="font-semibold border-white/70 border-2 bg-blue-800 rounded-md p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:text-white transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Hotel
  </button>
  <button className="font-semibold border-white/70 border-2 bg-blue-800 rounded-md p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:text-white transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Tour
  </button>
  <button className="font-semibold border-white/70 border-2 bg-blue-800 rounded-md p-2  text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:text-white transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Activity
  </button>
  <button className="font-semibold border-white/70 border-2 bg-blue-800 rounded-md p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:text-white transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Holiday Rentals
  </button>
  <button className="font-semibold border-white/70 border-2 bg-blue-800 rounded-md p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:text-white transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Car
  </button>
  <button className="font-semibold border-white/70 border-2 bg-blue-800 rounded-md p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:text-white transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Cruise
  </button>
  <button className="font-semibold border-white/70 border-2 bg-blue-800 rounded-md p-2 text-white text-[clamp(0.7rem, 1.5vw, 1rem)] sm:text-[clamp(0.8rem, 1.5vw, 1.2rem)] lg:text-[clamp(1rem, 1.5vw, 1.5rem)] hover:text-white transition-all duration-200 hover:scale-125" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
    Flights
  </button>
</div>




         




<div className="flex flex-col sm:flex-row items-center justify-between bg-white p-2 xs:w-[80%] xxs:w-full max-xxs:bg-white xxs:p-2.5 rounded-full shadow-lg w-full sm:w-[90%] mx-auto mt-6 space-y-4 sm:space-y-0">
      
      <div className="flex flex-col w-full text-left sm:w-1/3 xs:w-[70%] items-center xxs:justify-center ">
        <label className="text-gray-700 text-[14px] sm:text-xs lg:text-sm xs:underline xs:underline-offset-2 font-bold lg:no-underline md:no-underline">
          Location
        </label>
        <input
          type="text"
          placeholder="Where are you going?"
          className="placeholder:pl-6 text-[11px] sm:text-xs xs:w-[70%] xxs:text-center xs:text-center lg:text-[13px] lg:text-sm bg-transparent outline-none sm:text-[9.5px] text-gray-900 mt-1 w-full"
        />
      </div>

      <div className="hidden h-10 border-l border-gray-300 sm:block"></div>

      <div className="flex flex-col w-full sm:w-1/3 xs:w-[70%] items-center xxs:justify-center">
        <label className="text-gray-700 text-[11px] sm:text-xs lg:text-sm font-bold xs:underline xs:underline-offset-2 lg:no-underline md:no-underline">
          Check in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Check out
        </label>
        <div className="flex justify-between w-full mt-1 text-center z-100 ">
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            placeholderText="Check in"
            className="text-[11px]   sm:text-xs cursor-pointer lg:text-[13px] xxs:text-center xs:w-[70%] xxs:bg-transparent xs:text-center placeholder:pl-4 sm:text-[9.5px] w-[48%] outline-none text-gray-900"
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
            className="text-[11px] cursor-pointer sm:text-xs lg:text-[13px] xxs:text-center xs:w-[70%] xxs:bg-transparent xs:text-center placeholder:pl-4 sm:text-[9.5px] w-[48%] outline-none text-gray-900"
          />
        </div>
      </div>

      <div className="hidden h-10 border-l border-gray-300 sm:block"></div>

      <div className="flex flex-col w-full text-left sm:w-1/3 xs:w-[70%] items-center xxs:justify-center">
        <label className="text-gray-700 text-[11px] sm:text-xs lg:text-sm font-bold xs:underline lg:no-underline xs:underline-offset-2 md:no-underline">
          Guest
        </label>
        <input
          type="text"
          value="2 adults - 1 child - 1 room"
          className="placeholder:ml-2 text-[11px] xs:w-[70%] xxs:text-center xxs:bg-transparent xs:text-center sm:text-xs lg:text-[13px] ml-6 sm:text-[9px] outline-none text-gray-900 mt-1 w-full"
        />
      </div>

      <button className="bg-blue-800 xxs:w-[30%] xxs:mt-2 xs:w-[30%] xxs:bg-blue-800 xs:py-2.5 xxs:px-4 xs:text-[13px] xs:bg-blue-800 sm:bg-blue-800 sm:px-4 sm:py-2.5 md:px-6 md:py-4 md:bg-blue-800 lg:bg-blue-800 lg:px-8 sm:ml-2 text-white text-[11px] sm:text-sm font-medium py-4 px-6 rounded-full w-full sm:w-auto">
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






