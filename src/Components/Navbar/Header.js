import { FaTelegram, FaInstagram, FaFacebook, FaWhatsapp, FaUser } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { useState,useRef,useEffect} from 'react';

import { IoPhonePortrait, IoMail } from 'react-icons/io5';
import paa from './dds.png'
import logoos from '../Landing_Page/HomePage/fdf.png'

export default function My_Header() {


  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
  const dropdownRef = useRef(null); // Reference to the dropdown element

  const cities = [
    { name: "Canada", href: "/Canada_visa" },
    { name: "USA", href: "/USA_visa" },
    { name: "UK", href: "/Uk_visa" },
    { name: "Schengen", href: "/Shengion_visa" },
    { name: "Turkey", href: "/Turkey_visa" },
    { name: "Australia", href: "/Australia_visa" },
  ];

  // Function to toggle the dropdown on click
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false); // Close dropdown if click happens outside
    }
  };

  useEffect(() => {
    // Add event listener when dropdown is open
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener when component unmounts or dropdown closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <>
      <div className='flex items-center justify-between px-8 bg-blue-900 border-b-4 border-white/80'>
        {/* Logo Section */}
        <div className='flex-shrink-0 mt-1 mb-2'>
          <img src={logoos} alt="Logo" className="w-32 h-28 " />
        </div>

        {/* Navigation Section */}
        <nav className='z-[100] pt-6 pb-2'>
          <ul className="flex flex-wrap justify-center space-x-0 sm:space-x-2 md:space-x-4 lg:space-x-8 xl:space-x-6">
            {[
              { href: "/", text: "Home" },
              { href: "/visa", text: "Visa Portal" },
              { href: "/visa_application", text: "Visa Application" },
              { href: "/application_form", text: "Apply Now" },
              { href: "#", text: "Destinations" }, // 'Destinations' will control dropdown
              { href: "#", text: "News" },
              { href: "#", text: "Blog" },
              { href: "#", text: "Contact Us" }
            ].map((item, index) => (
              <li key={index} className="relative px-12 mb-4 transition-all duration-600 sm:px-2 hover:scale-125 group">
                {item.text === "Destinations" ? (
                  <div className="relative" ref={dropdownRef}>
                    <a
                      onClick={toggleDropdown} // Handle click event to toggle dropdown
                      className="relative hover:scale-125 transition-all duration-300 cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-[-8px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-[-8px] after:right-[50%]"
                      style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)' }}
                    >
                      <span className="text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl hover:text-white">
                        {item.text}
                      </span>
                    </a>

                    {/* Dropdown: Only show if clicked */}
                    {showDropdown && (
          

                      <ul className="absolute z-50 w-48 mt-6 text-center transition-all duration-300 bg-white border-2 border-blue-900 rounded-lg shadow-lg -left-8">
  {cities.map((city, idx) => (
    <li
      key={idx}
      className="z-50 px-4 py-1 transition-transform duration-500 cursor-pointer hover:scale-105"
    >
      <a
        href={city.href}
        className="block transition-colors duration-500 ease-in-out rounded-md p-0.5 hover:bg-blue-900 pt-1 pb-1 hover:text-white"
        onClick={() => setShowDropdown(false)}
      >
        {city.name}
      </a>
    </li>
  ))}
</ul>



                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="relative hover:scale-125 transition-all duration-300 z-50 cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-[-8px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-[-8px] after:right-[50%]"
                    style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)' }}
                  >
                    <span className="text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl hover:text-white">
                      {item.text}
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );



}