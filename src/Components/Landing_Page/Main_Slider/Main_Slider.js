





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Main_Slider() {
  const slides = [
    {
      id: 1,
      title: "Venice",
      date: "SA 16.05",
      price: "1003$",
      oldPrice: "1200$",
      discount: "20%",
      description: "01 Stop. On the Way, 2h 50mins. One way.",
      imageUrl: "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Washington",
      date: "FR 10.07",
      price: "1999$",
      oldPrice: "2500$",
      discount: "20%",
      description: "Non-stop. Direct flight. Round trip.",
      imageUrl: "https://images.pexels.com/photos/2606395/pexels-photo-2606395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Province of Como",
      date: "MO 20.09",
      price: "1705$",
      oldPrice: "2100$",
      discount: "20%",
      description: "02 Stops. On the Way, 3h 20mins. One way.",
      imageUrl: "https://images.pexels.com/photos/23719842/pexels-photo-23719842/free-photo-of-kanal-w-wenecji.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay functionality using useEffect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3500); 
    return () => clearInterval(interval);
  }, []);

  return (
  //   <div className="w-full pt-2">


  // <h2 className="pb-2 mt-16 text-4xl font-bold text-[#007fac] text-center">Destination Gallery</h2>
  // <div class="w-[300px] h-1 mx-auto mt-2 mb-4  bg-[#f58d03] "></div>

  // <p className="mb-8 text-xl text-center text-gray-500">These popular destinations have a lot to offer</p>

  //     <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden">
  //       {slides.map((slide, index) => {
  //         const isCurrentSlide = index === currentSlide;
  //         const isPreviousSlide = index === (currentSlide - 1 + slides.length) % slides.length;
  //         const isNextSlide = index === (currentSlide + 1) % slides.length;

  //         let positionClass = "translate-x-[100%]";
  //         let blurClass = "blur-sm";

  //         if (isCurrentSlide) {
  //           positionClass = "translate-x-[0%] scale-[1.15] z-20 -mx-8";
  //           blurClass = "blur-none"; // Remove blur for the current slide
  //         } else if (isPreviousSlide) {
  //           positionClass = "translate-x-[-60%] scale-[0.9] z-10";
  //         } else if (isNextSlide) {
  //           positionClass = "translate-x-[60%] scale-[0.9] z-10";
  //         }

  //         return (
  //           <div
  //             key={slide.id}
  //             className={`absolute transition-all duration-700 ease-in-out ${positionClass}`}
  //           >
  //             <div
  //               className={`w-[40vw] h-[400px] bg-cover bg-center rounded-xl shadow-lg flex flex-col justify-between p-8 shadow-xl transition-all duration-500 ease-in-out hover:blur-none ${blurClass}`}
  //               style={{ backgroundImage: `url(${slide.imageUrl})` }}
  //             >
  //               <div className="flex justify-end">
  //                 <span className="px-2 py-1 text-xs text-white bg-red-600 rounded sm:text-sm">
  //                   {slide.discount}
  //                 </span>
  //               </div>
  //               <div>
  //                 <h2 className="text-xl font-bold text-white sm:text-2xl md:text-4xl" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>{slide.title}</h2>
  //                 <span className="block inline-block px-2 py-1 my-2 text-xs text-white bg-[#007fac] rounded sm:text-sm">
  //                   {slide.date}
  //                 </span>
  //                 <div className="text-white">
  //                   <span className="text-sm text-red-400 line-through sm:text-base md:text-lg" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>{slide.oldPrice}</span>
  //                   <span className="text-lg font-bold sm:text-xl md:text-2xl" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}> {slide.price}</span>
  //                 </div>
  //                 <p className="text-sm text-white sm:text-base md:text-lg" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>{slide.description}</p>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })}
  //       <button
  //         className="absolute z-30 text-3xl text-[#007fac] left-4"
  //         onClick={prevSlide}
  //       >
  //         <FaArrowLeft />
  //       </button>
  //       <button
  //         className="absolute z-30 text-3xl text-[#007fac] right-4"
  //         onClick={nextSlide}
  //       >
  //         <FaArrowRight />
  //       </button>
  //     </div>
  //   </div>

  


<div className="w-full pt-2">
  <h2 className="pb-2 mt-16 text-2xl font-bold text-[#007fac] text-center sm:text-4xl">
    Destination Gallery
  </h2>
  <div className="w-[200px] h-1 mx-auto mt-2 mb-4 bg-[#f58d03] sm:w-[300px]"></div>
  <p className="mb-4 text-sm text-center text-gray-500 sm:text-xl">
    These popular destinations have a lot to offer
  </p>

  <div className="relative w-full h-[400px] sm:h-[500px] flex justify-center items-center overflow-hidden">
    {slides.map((slide, index) => {
      const isCurrentSlide = index === currentSlide;
      const isPreviousSlide = index === (currentSlide - 1 + slides.length) % slides.length;
      const isNextSlide = index === (currentSlide + 1) % slides.length;

      let positionClass = "translate-x-[100%]";
      let blurClass = "blur-sm";

      if (isCurrentSlide) {
        positionClass = "translate-x-[0%] scale-[1.1] z-20 -mx-4 sm:scale-[1.15] sm:-mx-8";
        blurClass = "blur-none";
      } else if (isPreviousSlide) {
        positionClass = "translate-x-[-50%] scale-[0.85] z-10 sm:translate-x-[-60%] sm:scale-[0.9]";
      } else if (isNextSlide) {
        positionClass = "translate-x-[50%] scale-[0.85] z-10 sm:translate-x-[60%] sm:scale-[0.9]";
      }

      return (
        <div
          key={slide.id}
          className={`absolute transition-all duration-700 ease-in-out ${positionClass}`}
        >
          <div
            className={`w-[80vw] sm:w-[40vw] h-[300px] sm:h-[400px] bg-cover bg-center rounded-lg shadow-lg flex flex-col justify-between p-4 sm:p-8 transition-all duration-500 ease-in-out hover:blur-none ${blurClass}`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="flex justify-end">
              <span className="px-2 py-1 text-xs text-white bg-red-600 rounded sm:text-sm">
                {slide.discount}
              </span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white sm:text-2xl md:text-4xl" style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)' }}>
                {slide.title}
              </h2>
              <span className="block inline-block px-2 py-1 my-2 text-xs text-white bg-[#007fac] rounded sm:text-sm">
                {slide.date}
              </span>
              <div className="text-white">
                <span className="text-sm text-red-400 line-through sm:text-base md:text-lg" style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)' }}>
                  {slide.oldPrice}
                </span>
                <span className="text-lg font-bold sm:text-xl md:text-2xl" style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)' }}>
                  {slide.price}
                </span>
              </div>
              <p className="text-xs text-white sm:text-base" style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)' }}>
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      );
    })}
    <button
      className="absolute z-30 text-3xl sm:text-[#007fac] text-[#007fac] left-2 sm:text-5xl sm:left-4"
      onClick={prevSlide}
    >

{/* [#007fac] */}
      <FaArrowLeft />
    </button>
    <button
      className="absolute z-30 text-3xl text-[#007fac] sm:text-[#007fac] right-2 sm:text-5xl sm:right-4 shadow-2xl"

      onClick={nextSlide}
    >
      <FaArrowRight />
    </button>
  </div>
</div>


  
  );
}
