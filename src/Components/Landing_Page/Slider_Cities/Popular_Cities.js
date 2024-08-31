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
  <div className="w-full h-[550px] mt-32 ">
  <h2 className="pb-2 mt-12 text-4xl font-bold text-center">Popular Selections</h2>
  <div class="w-[300px] h-1 mx-auto mt-2 mb-4 bg-blue-800"></div>
  <p className="text-lg text-center text-gray-600 ">Explore the Best, Experience the Extraordinary!</p>
  <Swiper
    navigation
    modules={[Navigation, Autoplay]}
    spaceBetween={8}
    slidesPerView={5}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    className="w-full h-[65vh] mt-0"
    style={{ padding: '0 20px' }} 
  >
{data.map((item, index) => (
  <SwiperSlide key={index} className="flex justify-center p-4">
    <div className="relative flex items-center justify-center w-full h-full">
      <img
        src={item.image}
        alt={item.title}
        className="object-cover w-[80%] h-[60%] rounded-lg transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
      />
      <div className="absolute w-full p-4 text-center text-white bottom-36">
        {index % 2 === 0 ? (
          <>
            <div className="flex flex-col items-center justify-center p-4 mt-4">
              <div className="cursor-pointer">
                <button className="relative inline-flex items-center justify-center px-4 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out bg-white border-2 border-blue-600 rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">Explore</span>
                  <span className="relative invisible">Continue</span> 
                </button>
              </div>
            </div>
            <div className="p-2 mt-2 text-xl font-bold text-white bg-blue-800 rounded-md shadow-lg hover:scale-125">
              {item.title}
            </div>
          </>
        ) : (
          <>
            <div className="p-2 mb-2 text-xl font-bold text-white bg-blue-800 rounded-md shadow-lg cursor-pointer hover:scale-125">
              {item.title}
            </div>
            <div className="flex flex-col items-center justify-center p-4 mt-4">
              <div className="cursor-pointer">
                <button className="relative inline-flex items-center justify-center px-4 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out bg-white border-2 border-blue-600 rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">Continue</span>
                  <span className="relative invisible">Explore</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  </SwiperSlide>
))}
  </Swiper>
</div>
  );
};
export default PopularSelections;