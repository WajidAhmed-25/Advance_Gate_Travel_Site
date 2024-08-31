
import { FaTelegram, FaInstagram, FaFacebook, FaWhatsapp, FaUser } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { useState } from 'react';

export default function My_Header(){


  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD"];
  const languages = ["ENG", "SPA", "FRA", "GER", "CHI"];

    return(


        <>
        
        
        
        <header className="flex flex-wrap items-center justify-between px-4 py-4 text-sm bg-gray-100">
  <div className="flex space-x-4">
    <span className="font-bold text-gray-600">+92 1234567930</span>
    <span className="hidden font-bold text-gray-600 sm:inline">+92 1234567930</span>
  </div>
  <div className="flex items-center space-x-4">
    <FaTelegram className="w-5 h-5 text-blue-400" />
    <FaInstagram className="w-5 h-5 text-pink-500" />
    <FaFacebook className="w-5 h-5 text-blue-600" />
    <FaWhatsapp className="w-5 h-5 text-green-500" />
    <div className="items-center hidden space-x-1 text-gray-600 md:flex">
      <FaUser className="w-4 h-4" />
      <span>Hi Ahsan !</span>
    </div>

    {/* <div className="flex items-center space-x-1 text-gray-600">
      <span>ENG</span>
      <IoChevronDown className="w-4 h-4" />
    </div>
    <div className="flex items-center space-x-1 text-gray-600">
      <span>USD</span>
      <IoChevronDown className="w-4 h-4" />
    </div> */}



<div className="flex space-x-4">
  {/* Language Dropdown */}
  <div className="relative">
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
  </div>

  {/* Currency Dropdown */}
  <div className="relative">
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
</header>
        
        
        
        
        
        
        
        </>
    )
}