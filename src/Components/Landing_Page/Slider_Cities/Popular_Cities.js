import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const data = [
  { title: 'Cappadocia', image: 'https://images.unsplash.com/photo-1487622750296-6360190669a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' },
  { title: 'London', image: 'https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VFJBVkVMfGVufDB8fDB8fHww' },
  { title: 'Washington', image: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRSQVZFTHxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'London', image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' },
  { title: 'Washington', image: 'https://images.unsplash.com/photo-1517868163143-6eb6c78dbf54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' },
  { title: 'London', image: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFRSQVZFTHxlbnwwfDF8MHx8fDA%3D' }
];

const PopularSelections = () => {
  return (



  <div className="w-full h-[550px] mt-32 ">
  <h2 className="pb-2 mt-12 text-4xl font-bold text-center">Popular Selections</h2>
  <div class="w-[320px] h-1 mx-auto mt-2 mb-4 bg-blue-200"></div>

  <p className="text-lg text-center text-gray-600 ">These popular destinations have a lot to offer</p>

 




  
  <Swiper
    navigation
    modules={[Navigation, Autoplay]}
    spaceBetween={32}
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
      <SwiperSlide key={index} className="flex justify-center">
        <div className="relative flex items-center justify-center w-full h-full">
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-[80%] h-[60%] rounded-lg blur-sm hover:blur-none cursor-pointer"
          />
          <div className="absolute w-full p-2 text-center text-white bottom-36">
            <h3 className="text-xl font-bold">{item.title}</h3>
            {item.title === 'London' && (
              <button className="px-4 py-2 mt-2 text-white bg-blue-600 rounded-lg">
                Discover
              </button>
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




























