import React from 'react';
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
  return (
//   <div className="w-full h-[550px] mt-32 ">
//   <h2 className="pb-2 mt-12 text-4xl font-bold text-center">Popular Selections</h2>
//   <div class="w-[300px] h-1 mx-auto mt-2 mb-4 bg-blue-800"></div>
//   <p className="text-lg text-center text-gray-600 ">Explore the Best, Experience the Extraordinary!</p>
//   <Swiper
//     navigation
//     modules={[Navigation, Autoplay]}
//     spaceBetween={2}
//     slidesPerView={3}
//     loop={true}
//     autoplay={{
//       delay: 3000,
//       disableOnInteraction: false,
//     }}
//     className="w-full h-[65vh] mt-0"
//     style={{ padding: '0 20px' }} 
//   >
// {data.map((item, index) => (
//   <SwiperSlide key={index} className="flex justify-center p-4">
//     <div className="relative flex items-center justify-center w-full h-full">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="object-cover w-[90%] h-[50%] rounded-lg transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer border-black/40 border-2"
//       />
//       <div className="absolute w-full p-4 text-center text-white bottom-[25%]">
   
//       <div className="p-2 text-xl font-bold text-white bg-blue-800 rounded-md shadow-lg cursor-pointer hover:scale-125 ">
//               {item.title}
//             </div>
         
//       </div>
//     </div>
//   </SwiperSlide>
// ))}
//   </Swiper>
// </div>








<div className="w-full h-[550px] mt-24 ">
<h2 className="pb-2 mt-12 text-4xl font-bold text-center">Popular Selections</h2>
<div className="w-[300px] h-1 mx-auto mt-2 mb-4 bg-blue-800"></div>
<p className="text-xl text-center text-gray-500 ">Explore the Best, Experience the Extraordinary!</p>
<Swiper
  navigation
  modules={[Navigation, Autoplay]}
  spaceBetween={12} // Reduced the gap between slides
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  className="w-full h-[70vh]  "
  style={{ padding: '0 15px' }} 
>
  {data.map((item, index) => (
    <SwiperSlide key={index} className="flex justify-center h-full p-2 ">
      <div className="relative flex items-center justify-center w-full h-full ">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-[90%] h-[60%] rounded-lg transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer border-black/40 border-2"
        />
        <div className="absolute w-full p-4 text-center text-white bottom-[25%]">
          <div className="p-2 mb-4 text-xl font-bold text-white bg-blue-900 rounded-md shadow-lg cursor-pointer hover:scale-125 ">
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












