// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation, Autoplay } from 'swiper/modules';
// const data = [
//   { title: 'Cappadocia', image: 'https://images.unsplash.com/photo-1487622750296-6360190669a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' },
//   { title: 'London', image: 'https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VFJBVkVMfGVufDB8fDB8fHww' },
//   { title: 'Washington', image: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRSQVZFTHxlbnwwfHwwfHx8MA%3D%3D' },
//   { title: 'Australia', image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' },
//   { title: 'Canada', image: 'https://images.unsplash.com/photo-1517868163143-6eb6c78dbf54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' },
//   { title: 'Germany', image: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' }
// ];
// const PopularSelections = () => {
//   return (


// <>

// <div className="w-full h-[550px] mt-24">
// <h2 className="pb-2 mt-12 text-4xl font-bold text-center">Popular Selections</h2>
// <div className="w-[300px] h-1 mx-auto mt-2 mb-4 bg-blue-800"></div>
// <p className="text-xl text-center text-gray-500">Explore the Best, Experience the Extraordinary!</p>
// <Swiper
//   navigation
//   modules={[Navigation, Autoplay]}
//   spaceBetween={12} 
//   slidesPerView={3}
//   loop={true}
//   autoplay={{
//     delay: 3000,
//     disableOnInteraction: false,
//   }}
//   pagination={{
//     clickable: true,
//   }}
//   className="w-full h-[70vh]"
//   style={{ padding: '0 15px' }} 
// >
//   {data.map((item, index) => (
//     <SwiperSlide key={index} className="flex justify-center h-full p-2">
//       <div className="relative flex items-center justify-center w-full h-full">
//         <img
//           src={item.image}
//           alt={item.title}
//           className={`object-cover w-[90%] h-[60%] rounded-lg transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer border-black/40 border-2 ${
//             index % 3 === 1 ? 'brightness-100' : 'brightness-50'
//           }`}
//         />
//         <div className="absolute w-full p-4 text-center text-white bottom-[25%]">
//           <div className="p-2 mb-4 text-xl font-bold text-white bg-blue-900 rounded-md shadow-lg cursor-pointer hover:scale-125">
//             {item.title}
//           </div>
//         </div>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>
// </div>

// </>
//   );
// };
// export default PopularSelections;











import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const data = [
  { title: 'Cappadocia', image: 'https://images.unsplash.com/photo-1487622750296-6360190669a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' },
  { title: 'London', image: 'https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VFJBVkVMfGVufDB8fDB8fHww' },
  { title: 'Washington', image: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRSQVZFTHxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Australia', image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' },
  { title: 'Canada', image: 'https://images.unsplash.com/photo-1517868163143-6eb6c78dbf54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' },
  { title: 'Germany', image: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' }
];
const PopularSelections = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };


//   #f58d03 yellow

// #007fac blue

  return (
    // <div className="w-full h-[550px] mt-24">
    //   <h2 className="pb-2 mt-12 text-4xl font-bold text-center text-[#007fac]">Popular Selections</h2>
    //   <div className="w-[300px] h-1 mx-auto mt-2 mb-4 bg-[#f58d03]"></div>
    //   <p className="text-xl text-center text-gray-500">Explore the Best, Experience the Extraordinary!</p>
    //   <Swiper
    //     navigation
    //     modules={[Navigation, Autoplay]}
    //     spaceBetween={12} 
    //     slidesPerView={3}
    //     loop={true}
    //     centeredSlides={true}
    //     autoplay={{
    //       delay: 3000,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     onSlideChange={handleSlideChange}
    //     className="w-full h-[70vh]"
    //     style={{ padding: '0 15px' }} 
    //   >
    //     {data.map((item, index) => (
    //       <SwiperSlide key={index} className="flex justify-center h-full p-2">
    //         <div className="relative flex items-center justify-center w-full h-full">
    //           <img
    //             src={item.image}
    //             alt={item.title}
    //             className={`object-cover w-[90%] h-[60%] rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer border-black/40 border-2 ${
    //               index === activeIndex ? 'brightness-100' : 'brightness-50'
    //             }`}
    //           />
    //           <div className="absolute w-full p-4 text-center text-white bottom-[25%]">
    //             <div className="p-2 mb-4 text-xl font-bold text-white bg-[#007fac] rounded-md shadow-lg cursor-pointer hover:scale-110">
    //               {item.title}
    //             </div>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>



    <div className="w-full h-[550px] mt-24">
  <h2 className="pb-2 mt-12 text-4xl font-bold text-center text-[#007fac]">Popular Selections</h2>
  <div className="w-[300px] h-1 mx-auto mt-2 mb-4 bg-[#f58d03]"></div>
  <p className="text-xl text-center text-gray-500">Explore the Best, Experience the Extraordinary!</p>
  
  <Swiper
    navigation
    modules={[Navigation, Autoplay]}
    spaceBetween={12}
    slidesPerView={3} // Default for larger screens
    loop={true}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    onSlideChange={handleSlideChange}
    className="w-full h-[70vh]"
    style={{ padding: '0 15px' }}
    breakpoints={{
      // Configure breakpoints
      0: {   // From 0px to larger screens
        slidesPerView: 1,  // Only 1 slide on small screens
      },
      640: { // From 640px upwards (small screens)
        slidesPerView: 2,  // 2 slides on slightly larger screens
      },
      1024: { // From 1024px upwards (larger screens)
        slidesPerView: 3,  // Default 3 slides for larger screens
      },
    }}
  >
    {data.map((item, index) => (
      <SwiperSlide key={index} className="flex justify-center h-full p-2">
        <div className="relative flex items-center justify-center w-full h-full">
          <img
            src={item.image}
            alt={item.title}
            className={`object-cover w-[90%] h-[60%] rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer border-black/40 border-2 ${
              index === activeIndex ? 'brightness-100' : 'brightness-50'
            }`}
          />
          <div className="absolute w-full p-4 text-center text-white bottom-[25%]">
            <div className="p-2 mb-4 text-xl font-bold text-white bg-[#007fac] rounded-md shadow-lg cursor-pointer hover:scale-110">
              {item.title}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
};

export default PopularSelections;














