
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


// #f58d03 yellow

// #007fac blue

export default function Travel_Destinations(){


    const countries = [
        "United Kingdom", "United States", "Canada", "Australia", "New Zealand", "Germany", "France", 
        "Italy", "Spain", "Netherlands", "Sweden", "Switzerland", "Denmark", "Norway", "Belgium", 
        "Austria", "Portugal", "Greece", "Ireland", "Finland", "Japan", "South Korea", "Malaysia", 
        "Singapore", "Thailand", "Turkey", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", 
        "Bahrain", "Oman", "China", "Russia", "Ukraine", "Czech Republic", "Poland", "Hungary", 
        "Slovakia", "Slovenia", "Romania", "Bulgaria", "Lithuania", "Latvia", "Estonia", "South Africa", 
        "Egypt", "Brazil", "Argentina", "Mexico", "Chile", "India", "Indonesia", "Philippines", 
        "Sri Lanka", "Bangladesh", "Nepal", "Maldives", "Vietnam", "Cambodia", "Morocco", "Tunisia"
      ];

    return(



//         <div className="mt-32 mb-20">
//         <h2 class="text-4xl font-bold text-center mb-4 mt-4 transition-transform duration-500 transform hover:scale-105 cursor-default text-[#007fac]">
// Travel Destinations
// </h2>
// <div class="w-[280px] h-1 mx-auto mt-2 mb-4 bg-[#f58d03]"></div>
// <p className="text-xl text-center text-gray-500">Discover unforgettable experiences worldwide</p>




// <div class="flex flex-wrap lg:w-[75%] sm:mx-auto  sm:mb-2 mx-8 p-4  mt-8 mb-8">

// <div class="p-2 sm:w-1/2  mt-4 w-full ">


// <div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
// <FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-[#007fac]'/>
// <span class="font-medium text-xl text-[#007fac]">Switzerland</span>
// </div>
// </div>



// <div class="p-2 sm:w-1/2 w-full mt-4">
// <div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
// <FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-[#007fac]'/>
// <span class="font-medium text-xl text-[#007fac]">Turkey</span>
// </div>
// </div>



// <div class="p-2 sm:w-1/2 w-full mt-4">
// <div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
// <FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-[#007fac]'/>
// <span class="font-medium text-xl text-[#007fac]">UK</span>
// </div>
// </div>


// <div class="p-2 sm:w-1/2 w-full mt-4">
// <div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
// <FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-[#007fac]'/>
// <span class="font-medium text-xl text-[#007fac]">Finland</span>
// </div>
// </div>


// <div class="p-2 sm:w-1/2 w-full mt-4">
// <div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
// <FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-[#007fac]'/>
// <span class="font-medium text-xl text-[#007fac]">Europe</span>
// </div>
// </div>



// <div class="p-2 sm:w-1/2 w-full mt-4">
// <div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
// <FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-[#007fac]'/>
// <span class="font-medium text-xl text-[#007fac]">North America</span>
// </div>
// </div>


// <div class="p-2 sm:w-1/2 w-full mt-4">
// <div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
// <FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-[#007fac]'/>
// <span class="font-medium text-xl text-[#007fac]">America</span>
// </div>
// </div>



// <div class="p-2 sm:w-1/2 w-full mt-4">
// <div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
// <FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-[#007fac]'/>
// <span class="font-medium text-xl text-[#007fac]">Australia</span>
// </div>
// </div>
// </div>
// </div>


<div className="relative py-4 overflow-hidden border-2 border-b-2 border-t-2 border-r-0 border-l-0 border-[#007fac]">

<h2 class="text-4xl font-bold text-center mb-4 mt-8 transition-transform duration-500 transform hover:scale-105 cursor-default text-[#007fac]">
Travel Destinations
</h2>
<div class="w-[280px] h-1 mx-auto mt-2 mb-4 bg-[#f58d03]"></div>
<p className="mb-16 text-xl text-center text-gray-500">Discover unforgettable experiences worldwide</p>
    
<div className="mb-12 space-x-4 whitespace-nowrap animate-scroll">
  {countries.map((country, index) => (
    <div key={index} className="inline-block px-6 py-4 hover:bg-[#f58d03] hover:font-semibold font-semibold tracking-wide hover:text-[#007fac] cursor-pointer  text-[#007fac] border-2 border-[#007fac] rounded-full">
      {country}
    </div>
  ))}
</div>
</div>
    )
}