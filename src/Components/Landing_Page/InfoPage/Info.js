import React from 'react';
import plane from './plane.png'
import ten from './10.png'
import hour from './hour.png'

const InfoSection = () => {
  return (
<>
<div className="w-full p-4 bg-blue-100">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-7xl max-lgg:mx-16 max-lgg:space-y-2 max-md:mx-4 max-2xl:mx-24 max-lg:mx-12 max-xl:mx-16">
        <div className="flex items-center w-full p-4 mb-4 space-x-4 max-sm:mb-0 sm:w-auto sm:mb-0 max-sm:justify-center ">
          <img src={ten} alt="10+" className="w-24 h-12" />
        <div className='flex flex-col '>
          <span className='text-lg font-semibold text-blue-700'>YEARS ON THE MARKET</span>
          <span className="text-base text-black/80 ">We work with air tickets since 2010.</span>
          </div>
        </div>
        
        <div className="flex items-center w-full p-4 mb-4 space-x-1 sm:w-auto sm:mb-0 max-sm:justify-center">
          <img src={plane} alt="Globe" className="w-24 h-18" />
          <div className='flex flex-col'>
          <span className='text-lg font-semibold text-blue-700'>100 THOUSAND FLIGHTS</span>
          <span className="text-base">That’s how many tickets were brought from us.</span>
          </div>
        </div>
        
        <div className="flex items-center w-full p-4 space-x-1 sm:w-auto max-lgg:ml-auto max-lgg:mr-auto max-sm:justify-center ">
          <img src={hour} alt="24/7" className="w-24 h-18" />
          <div className='flex flex-col'>
          <span className='text-lg font-semibold text-blue-700'>CUSTOMER CARE 24/7</span>
          <span className="text-base">Lorem is a dummy text,and yes.</span>
          </div>
        </div>
      </div>
    </div>




{/* 
    <div className="w-full p-4 bg-blue-100">
  <div className="flex flex-col items-center justify-between mx-4 sm:flex-row sm:mx-32 max-w-7xl">
    <div className="flex items-center w-full p-4 mb-4 space-x-4 bg-green-400 sm:w-auto sm:mb-0">
      <img src={ten} alt="10+" className="h-8 w-14" />
      <div className='flex flex-col'>
        <span className='font-semibold text-blue-700 text-[14px]'>YEARS ON THE MARKET</span>
        <span className="text-[10px] text-black/80">We work with air tickets since 2010.</span>
      </div>
    </div>
    
    <div className="flex items-center w-full p-4 mb-4 space-x-4 bg-orange-400 sm:w-auto sm:mb-0">
      <img src={plane} alt="Globe" className="h-[52px] w-16" />
      <div className='flex flex-col'>
        <span className='font-semibold text-blue-700 text-[14px]'>100 THOUSAND FLIGHTS</span>
        <span className="text-[10px]">That's how many tickets were brought from us.</span>
      </div>
    </div>
    
    <div className="flex items-center w-full p-4 space-x-4 bg-teal-400 sm:w-auto">
      <img src={hour} alt="24/7" className="h-[52px] w-16" />
      <div className='flex flex-col'>
        <span className='font-semibold text-blue-700 text-[14px]'>CUSTOMER CARE 24/7</span>
        <span className="text-[10px]">Lorem is a dummy text,and yes.</span>
      </div>
    </div>
  </div>
</div> */}

</>
    
  );
};

export default InfoSection;
