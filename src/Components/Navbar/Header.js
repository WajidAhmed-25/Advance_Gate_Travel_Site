
import { FaTelegram, FaInstagram, FaFacebook, FaWhatsapp, FaUser } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { useState } from 'react';
import { IoPhonePortrait, IoMail } from 'react-icons/io5'; 
import paa from './dds.png'
import logoos from '../Landing_Page/HomePage/fdf.png'

export default function My_Header(){


  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD"];
  const languages = ["ENG", "SPA", "FRA", "GER", "CHI"];

    return(


        <>
        
        
        
        {/* <header className="sticky flex flex-wrap items-center justify-between px-4 py-4 text-sm bg-blue-900">




        <div className="flex space-x-4">
      <span className="flex items-center space-x-2 text-lg font-semibold text-white">
        <IoPhonePortrait className='w-4 h-6' /> {/* Phone icon 
        <span>+92 1234567930</span>
      </span>
      <span className="items-center hidden space-x-2 text-lg font-semibold text-white sm:flex">
        <IoMail  className='w-6 h-4'/> {/* Email icon 
        <span>advancegate@gmail.com</span>
      </span>
    </div>


        <div className="flex space-x-4 ">

          <img src={paa} className='w-48 h-16 rounded-lg' />
  
  </div>







  <div className="flex items-center space-x-4">
    <FaTelegram className="w-8 h-8 text-blue-400" />
    <FaInstagram className="w-8 h-8 text-pink-500" />
    <FaFacebook className="w-8 h-8 text-blue-600" />
    <FaWhatsapp className="w-8 h-8 text-green-500" />
    <div className="items-center hidden space-x-1 text-gray-600 md:flex">
      <FaUser className="w-4 h-4 text-white" />
      <span className='text-lg text-white '>Hi Ahsan !</span>
    </div>




<div className="flex space-x-4">
  {/* Language Dropdown */}
  {/* <div className="relative">
    <div
      className="flex items-center space-x-1 text-gray-700 transition duration-200 cursor-pointer hover:text-indigo-600"
      onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
    >
      <span className="font-semibold">ENG</span>
      <IoChevronDown className="w-4 h-4" />
    </div>
    {showLanguageDropdown && (
      <div className="absolute z-10 w-16 mt-2 -ml-2 bg-white border border-gray-300 rounded-lg shadow-lg">
        {languages.map((language) => (
          <div
            key={language}
            className="px-4 py-2 text-gray-700 transition duration-200 ease-in-out transform cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-105 hover:rounded-md"
            onClick={() => {
              console.log(`Selected language: ${language}`);
              setShowLanguageDropdown(false);
            }}
          >
            {language}
          </div>
        ))}
      </div>
    )}
  </div> */}

  {/* Currency Dropdown */}
  {/* <div className="relative">
    <div
      className="flex items-center space-x-1 text-gray-700 transition duration-200 cursor-pointer hover:text-indigo-600"
      onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
    >
      <span className="font-semibold">USD</span>
      <IoChevronDown className="w-4 h-4" />
    </div>
    {showCurrencyDropdown && (
      <div className="absolute z-10 w-16 mt-2 -ml-2 bg-white border border-gray-300 rounded-lg shadow-lg">
        {currencies.map((currency) => (
          <div
            key={currency}
            className="px-4 py-2 text-gray-700 transition duration-200 ease-in-out transform cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-105 hover:rounded-md"
            onClick={() => {
              console.log(`Selected currency: ${currency}`);
              setShowCurrencyDropdown(false);
            }}
          >
            {currency}
          </div>
        ))}
      </div>
    )}
  </div> 
</div>


  </div>
</header> */}
        
        
        <div className='flex items-center justify-between px-8 bg-blue-900 border-b-4 border-white/80'>
  {/* Logo Section */}
  <div className='flex-shrink-0 mt-1 mb-2'>
    <img src={logoos} alt="Logo" className="w-32 h-28 " />
  </div>

  {/* Navigation Section */}
  
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




    
</div>

        
        
        
        
        
        </>
    )
}