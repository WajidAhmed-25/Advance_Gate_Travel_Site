// import React, { useState } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

// const destinations = [
//   { name: 'Washington', discount: '15%', price: '900$',pic_url: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
//   { name: 'Venice', discount: '20%', price: '1003$',pic_url: 'https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
//   { name: 'Province of Como', discount: '30%', price: '1200$' ,pic_url:'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

// ];

// const Main_Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
//   };

//   return (
//     <div className="w-full px-2 py-12 sm:px-4 lg:px-8">

// <div className="flex items-center justify-center w-full">
//   <h1 className="text-center text-black font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]">
//     Special Monthly Offers
//   </h1>
// </div>
// <div className="flex justify-center ">
//   <div className="h-[3px] w-[200px] bg-blue-400 mt-[16px]"></div>
// </div>


//       <div className="relative mt-16 ">
//         <div className="relative overflow-hidden h-[450px]">
//           <div 
//             className="flex max-w-full transition-transform duration-300 ease-in-out -space-x-36"
//             style={{
//               transform: `translateX(-${currentIndex * 33.33}%)`,
//             marginLeft: '27%'
//             }}
//           >


// {destinations.map((destination, index) => (
//   <div 
//     key={index} 
//     className={`flex-shrink-0 w-[50%] transition-all duration-300 ${
//       index === currentIndex ? 'scale-100 opacity-100 filter-none' : 'scale-75 opacity-50 filter-blur'
//     }`}
//   >

//     <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-12">
//       <img
//         src={destination.pic_url}
//         alt={destination.name}
//         className={`object-cover w-full h-full transition-filter duration-300  ${
//           index !== currentIndex ? 'blur-sm' : 'blur-0'
//         }`}
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
//           <h3 className="text-4xl font-bold">{destination.name}</h3>
//           <button className="px-4 py-2 mt-2 text-sm font-semibold bg-blue-600 rounded">
//             Details
//           </button>
//           <p className="mt-2 text-xl">{destination.price}</p>
//         </div>
//       </div>
//       <div className="absolute top-0 right-0 px-2 py-1 text-sm font-semibold text-white bg-red-600">
//         {destination.discount} OFF
//       </div>
//     </div>
//   </div>
// ))}


//           </div>
//         </div>
        
//         <button
//           onClick={prevSlide}
//           className="absolute z-10 p-2 text-white -translate-y-1/2 bg-blue-700 rounded-full shadow-lg left-4 top-1/2"
//         >
//           <ChevronLeftIcon className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute z-10 p-2 text-white -translate-y-1/2 bg-blue-700 rounded-full shadow-lg right-4 top-1/2"
//         >
//           <ChevronRightIcon className="w-6 h-6" />
//         </button>
        
//       </div>
  

//       <div className="flex justify-center ">
//   <div className="h-[3.4px] w-[400px] bg-blue-400 -mt-12 -ml-16"></div>
// </div>

//     </div>
//   );
// };

// export default Main_Slider;














///// ===============================================================================================================================/////




import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const destinations = [
  { name: 'Washington', discount: '15%', price: '900$',pic_url: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  { name: 'Venice', discount: '20%', price: '1003$',pic_url: 'https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  { name: 'Province of Como', discount: '30%', price: '1200$' ,pic_url:'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

];

const Main_Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
  };

  return (
    <div className="w-full px-2 py-12 sm:px-4 lg:px-8">

<div className="flex items-center justify-center w-full">
  <h1 className="text-center text-black font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]">
    Special Monthly Offers
  </h1>
</div>
<div className="flex justify-center ">
  <div className="h-[3px] w-[200px] bg-blue-400 mt-[16px]"></div>
</div>


      <div className="relative mt-16 ">
        <div className="relative overflow-hidden h-[450px]">
          <div 
            className="flex max-w-full transition-transform duration-300 ease-in-out -space-x-36"
            style={{
              transform: `translateX(-${currentIndex * 30.33}%)`,
            marginLeft: '27%'
            }}
          >


{destinations.map((destination, index) => (
  <div 
    key={index} 
    className={`flex-shrink-0 w-[50%] transition-all duration-300 ${
      index === currentIndex ? 'scale-100 opacity-100 filter-none' : 'scale-75 opacity-50 filter-blur'
    }`}
  >

    <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-12">
      <img
        src={destination.pic_url}
        alt={destination.name}
        className={`object-cover w-full h-full transition-filter duration-300  ${
          index !== currentIndex ? 'blur-sm' : 'blur-0'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h3 className="text-4xl font-bold">{destination.name}</h3>
          <button className="px-4 py-2 mt-2 text-sm font-semibold bg-blue-600 rounded">
            Details
          </button>
          <p className="mt-2 text-xl">{destination.price}</p>
        </div>
      </div>
      <div className="absolute top-0 right-0 px-2 py-1 text-sm font-semibold text-white bg-red-600">
        {destination.discount} OFF
      </div>
    </div>
  </div>
))}


          </div>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute z-10 p-2 text-white -translate-y-1/2 bg-blue-700 rounded-full shadow-lg left-4 top-1/2"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-10 p-2 text-white -translate-y-1/2 bg-blue-700 rounded-full shadow-lg right-4 top-1/2"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
        
      </div>
  

      <div className="flex justify-center ">
  <div className="h-[3.4px] w-[400px] bg-blue-400 -mt-12 -ml-4"></div>
</div>

    </div>
  );
};

export default Main_Slider;












