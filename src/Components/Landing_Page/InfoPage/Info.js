// import React from 'react';
// import plane from './plane.png';
// import ten from './10.png';
// import hour from './hour.png';

// const InfoSection = () => {
//   return (
//     <div className="w-full p-4 bg-blue-100">
//       <div className="flex flex-wrap items-center justify-center mx-auto space-x-32 bg-green-400 max-w-8xl max-lgg:space-y-6 max-lgg:bg-yellow-500">
//         <div className="flex items-center w-full p-4 mb-4 space-x-4 sm:w-auto sm:mb-0 max-sm:justify-center">
//           <img src={ten} alt="10+" className="w-24 h-12" />
//           <div className="flex flex-col">
//             <span className="text-lg font-semibold text-blue-700">YEARS ON THE MARKET</span>
//             <span className="text-base text-black/80">We work with air tickets since 2010.</span>
//           </div>
//         </div>
        
//         <div className="flex items-center w-full p-4 mb-4 space-x-1 sm:w-auto sm:mb-0 max-sm:justify-center sm:order-2">
//           <img src={plane} alt="Globe" className="w-24 h-18" />
//           <div className="flex flex-col">
//             <span className="text-lg font-semibold text-blue-700">100 THOUSAND FLIGHTS</span>
//             <span className="text-base">That’s how many tickets were brought from us.</span>
//           </div>
//         </div>
        
//         <div className="flex items-center w-full p-4 space-x-1 sm:w-auto max-sm:justify-center sm:order-1 sm:self-center">
//           <img src={hour} alt="24/7" className="w-24 h-18" />
//           <div className="flex flex-col">
//             <span className="text-lg font-semibold text-blue-700">CUSTOMER CARE 24/7</span>
//             <span className="text-base">Lorem is a dummy text,and yes.</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfoSection;







import React from 'react';
import plane from './plane.png';
import ten from './10.png';
import hour from './hour.png';

const InfoSection = () => {
  return (
    <div className="w-full p-4 bg-blue-100">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-8xl max-lgg:flex-col max-lgg:items-center max-lgg:justify-center ">
        
        <div className="flex items-center p-4 space-x-4 sm:w-auto max-sm:justify-center">
          <img src={ten} alt="10+" className="w-24 h-12" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-blue-700">YEARS ON THE MARKET</span>
            <span className="text-base text-black/80">We work with air tickets since 2010.</span>
          </div>
        </div>
        
        <div className="flex items-center p-4 space-x-1 sm:w-auto max-sm:justify-center max-lgg:-ml-16">
          <img src={hour} alt="24/7" className="w-24 h-18" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-blue-700">CUSTOMER CARE 24/7</span>
            <span className="text-base">Lorem is a dummy text,and yes.</span>
          </div>
        </div>
        
        <div className="flex items-center p-4 space-x-1 max-md:ml-0 sm:w-auto max-sm:justify-center max-lgg:ml-8">
          <img src={plane} alt="Globe" className="w-24 h-18" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-blue-700">100 THOUSAND FLIGHTS</span>
            <span className="text-base">That’s how many tickets were brought from us.</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default InfoSection;















