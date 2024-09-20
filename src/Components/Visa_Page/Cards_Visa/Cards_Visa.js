import React from 'react';
import plane from './plane.png';


export default function Cards_Visa() {

  // #f58d03 yellow

  // #007fac blue

  return (
    
    <>

<div className='pt-2 pb-6 bg-gray-100'>
  <div className='bg-gray-100'>
    <div className="pb-24 mt-12 text-center ">
      <h2 className="text-3xl font-bold tracking-tight text-[#007fac] sm:text-4xl">Travel Packages We Offer</h2>
      <div className="w-[490px] h-1  mt-4 mb-4 bg-[#f58d03] mx-auto"></div>
      <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
        Discover the world with our exclusive travel packages.
      </p>
    </div>



    <div className="flex flex-col items-center justify-center gap-16 p-4 mb-24 lg:flex-row md:p-0">
      {/* Card 1: Adventure Package */}
      <div className="relative w-full max-w-sm px-5 py-8 overflow-hidden bg-gray-200 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:scale-110 h-96 group rounded-3xl border-[#f58c03a0] border-2">
        <img src="https://images.pexels.com/photos/5216398/pexels-photo-5216398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Adventure Package" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 w-full h-full transition duration-500 bg-black bg-opacity-0 rounded-3xl backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur"></div>
        <div className="absolute text-white inset-x-5">
          <h2 className="mb-2 text-4xl font-semibold">Adventure Package</h2>
          <p className="mb-6 text-sm font-medium tracking-wider uppercase">Explore the Wild</p>
          <p className="hidden group-hover:block">Unleash your inner adventurer with thrilling activities like hiking, rafting, and exploring nature's hidden gems. Perfect for adventure enthusiasts.</p>
        </div>
        <button className="absolute hidden w-[40%] py-3 mx-auto font-bold transition duration-200 text-[#f58d03] bg-[#007fac] text-lg shadow-lg inset-x-5 bottom-8 rounded-2xl hover:bg-gray-300 group-hover:block">Learn more</button>
      </div>

      {/* Card 2: Beach Getaway */}
      <div className="relative w-full max-w-sm px-5 py-8 overflow-hidden bg-gray-200 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:scale-110 h-96 group rounded-3xl border-[#f58c03a0] border-2">
        <img src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Beach Getaway" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 w-full h-full transition duration-500 bg-black bg-opacity-0 rounded-3xl backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur"></div>
        <div className="absolute text-white inset-x-5">
          <h2 className="mb-2 text-4xl font-semibold">Beach Getaway</h2>
          <p className="mb-6 text-sm font-medium tracking-wider uppercase">Relax by the Sea</p>
          <p className="hidden group-hover:block">Relax and unwind at serene beach resorts with crystal-clear waters and soft white sands. Ideal for those seeking peace and tranquility.</p>
        </div>
        <button className="absolute hidden w-[40%] py-3 mx-auto font-bold transition duration-200 text-[#f58d03] bg-[#007fac] text-lg shadow-lg inset-x-5 bottom-8 rounded-2xl hover:bg-gray-300 group-hover:block">Learn more</button>
      </div>

      {/* Card 3: Cultural Experience */}
      <div className="relative w-full max-w-sm px-5 py-8 overflow-hidden bg-gray-200 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:scale-110 h-96 group rounded-3xl border-[#f58c03a0] border-2">
        <img src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cultural Experience" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 w-full h-full transition duration-500 bg-black bg-opacity-0 rounded-3xl backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur"></div>
        <div className="absolute text-white inset-x-5">
          <h2 className="mb-2 text-4xl font-semibold">Cultural Experience</h2>
          <p className="mb-6 text-sm font-medium tracking-wider uppercase">Discover New Cultures</p>
          <p className="hidden group-hover:block">Immerse yourself in the rich history and vibrant cultures of different countries. Enjoy guided tours, local cuisine, and unforgettable cultural encounters.</p>
        </div>
        <button className="absolute hidden w-[40%] py-3 mx-auto font-bold transition duration-200 text-[#f58d03] bg-[#007fac] text-lg shadow-lg inset-x-5 bottom-8 rounded-2xl hover:bg-gray-300 group-hover:block">Learn more</button>
      </div>
    </div>
  </div>
</div>








    </>
  );
}
