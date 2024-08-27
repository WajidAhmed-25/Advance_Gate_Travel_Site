
import { FaTelegram, FaInstagram, FaFacebook, FaWhatsapp, FaUser } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';

export default function My_Header(){


    return(


        <>
        
        
        
        <header className="flex flex-wrap items-center justify-between px-4 py-2 text-sm bg-gray-100">
  <div className="flex space-x-4">
    <span className="text-gray-600">+92 1234567930</span>
    <span className="hidden text-gray-600 sm:inline">+92 1234567930</span>
  </div>
  <div className="flex items-center space-x-4">
    <FaTelegram className="w-5 h-5 text-blue-400" />
    <FaInstagram className="w-5 h-5 text-pink-500" />
    <FaFacebook className="w-5 h-5 text-blue-600" />
    <FaWhatsapp className="w-5 h-5 text-green-500" />
    <div className="items-center hidden space-x-1 text-gray-600 md:flex">
      <FaUser className="w-4 h-4" />
      <span>Hi Jane Doe!</span>
    </div>
    <div className="flex items-center space-x-1 text-gray-600">
      <span>ENG</span>
      <IoChevronDown className="w-4 h-4" />
    </div>
    <div className="flex items-center space-x-1 text-gray-600">
      <span>USD</span>
      <IoChevronDown className="w-4 h-4" />
    </div>
  </div>
</header>
        
        
        
        
        
        
        
        </>
    )
}