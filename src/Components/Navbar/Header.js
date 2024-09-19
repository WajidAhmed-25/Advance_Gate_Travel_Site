import { FaTelegram, FaInstagram, FaFacebook, FaWhatsapp, FaUser } from 'react-icons/fa';
import { IoChevronDown, IoMenu, IoClose } from 'react-icons/io5';
import { useState, useRef, useEffect } from 'react';
import { IoPhonePortrait, IoMail } from 'react-icons/io5';
import paa from './dds.png';
import paa2 from './travels.png'
import logoos from '../Landing_Page/HomePage/fdf.png';

export default function My_Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  const cities = [
    { name: "Canada", href: "/Canada_visa" },
    { name: "USA", href: "/USA_visa" },
    { name: "UK", href: "/Uk_visa" },
    { name: "Schengen", href: "/Shengion_visa" },
    { name: "Turkey", href: "/Turkey_visa" },
    { name: "Australia", href: "/Australia_visa" },
  ];

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const toggleMobileMenu = () => {
    setShowMobileMenu(prev => !prev);
  };

  return (
    <>
      <div className='flex items-center justify-between px-8 bg-white border-b-4 border-[#007fac]/80'>

        <div className='flex-shrink-0 mt-1 mb-2'>
          <img src={paa2} alt="Logo" className="w-36 h-28" />
        </div>

    
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl text-white bg-[#007fac] focus:outline-none"
          >
            {showMobileMenu ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Desktop Navigation Section */}
        <nav className={`hidden lg:flex z-[100] pt-6 pb-2`}>
          <ul className="flex flex-wrap justify-center space-x-0 text-[#007fac] sm:space-x-2 md:space-x-4 lg:space-x-8 xl:space-x-6">
            {[
              { href: "/", text: "Home" },
              { href: "/visa", text: "Visa Portal" },
              { href: "/visa_application", text: "Visa Application" },
              { href: "/application_form", text: "Apply Now" },
              { href: "#", text: "Destinations" },
              // { href: "#", text: "News" },
              { href: "/Travel_Blogs", text: "Blog" },
              { href: "/Contact_Us", text: "Contact Us" }
            ].map((item, index) => (
              <li key={index} className="relative px-12 mb-4 transition-all duration-600 sm:px-2 hover:scale-125 group">
                {item.text === "Destinations" ? (
                  <div className="relative" ref={dropdownRef}>
                    <a
                      onClick={toggleDropdown}
                      className="relative hover:scale-125 transition-all duration-300 cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#007fac] before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-[-8px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#007fac] after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-[-8px] after:right-[50%]"
                     // style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)' }}
                    >
                      <span className="text-sm font-semibold text-[#007fac] sm:text-base md:text-lg lg:text-xl hover:text-[#007fac]">
                        {item.text}
                      </span>
                    </a>
                    {showDropdown && (
                      <ul className="absolute z-50 w-48 mt-6 text-center transition-all duration-300 bg-white border-2 border-[#007fac] rounded-lg shadow-lg -left-8">
                        {cities.map((city, idx) => (
                          <li
                            key={idx}
                            className="z-50 px-4 py-1 transition-transform duration-500 cursor-pointer hover:scale-105"
                          >
                            <a
                              href={city.href}
                              className="block transition-colors hover:font-bold duration-500 ease-in-out rounded-md p-0.5 text-[#007fac] hover:bg-[#007fac] pt-1 pb-1 hover:text-[#f58d03]"
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
                    className="relative hover:scale-125 transition-all duration-300 z-50 cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#007fac] before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-[-8px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#007fac] after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-[-8px] after:right-[50%]"
                  //  style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)' }}
                  >
                    <span className="text-sm font-semibold text-[#007fac] sm:text-base md:text-lg lg:text-xl hover:text-[#007fac]">
                      {item.text}
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 w-48 h-full bg-white shadow-lg transform transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} z-40`}>
          <div className="flex flex-col items-start p-4 mt-4">

          <button
              onClick={toggleMobileMenu}
              className="flex justify-end w-full mb-6 text-2xl text-blue-900 "
            >
              <IoClose />
            </button>

          <div className='flex justify-center flex-shrink-0 w-full mt-1 mb-16 '>
          <img src={paa2} alt="Logo" className="items-center justify-center w-32 h-24" />
        </div>

            
        
            <ul className="space-y-6">
              {[
                { href: "/", text: "Home" },
                { href: "/visa", text: "Visa Portal" },
                { href: "/visa_application", text: "Visa Application" },
                { href: "/application_form", text: "Apply Now" },
                { href: "#", text: "Destinations" },
                { href: "#", text: "News" },
                { href: "#", text: "Blog" },
                { href: "#", text: "Contact Us" }
              ].map((item, index) => (
                <li key={index} className=''>
                  <a
                    href={item.href}
                    className="text-lg font-semibold text-blue-900 transition-all duration-300 hover:scale-105 hover:text-blue-900"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
