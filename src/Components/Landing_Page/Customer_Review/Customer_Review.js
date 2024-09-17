// import React, { useState } from 'react';
// const testimonials = [
//   {
//     id: 1,
//     name: 'Jane Doe',
//     avatar: 'https://i.pravatar.cc/100?img=1',
//     content: 'Lorem is a dummy text. hi hello how are you, thanks yes you are right, very great service. This is very nice, great. This is very nice, great. nice Service is amazing Lorem is a dummy text. hi hello how are you, thanks yes you are right very great service. This is very nice, great. This is very nice, great. nice Service is amazing',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'John Smith',
//     avatar: 'https://i.pravatar.cc/100?img=2',
//     content: 'Exceptional service! The team went above and beyond to meet my needs. Their attention to detail and prompt responses made the entire experience smooth and enjoyable. I highly recommend their services to anyone looking for top-notch quality and professionalism.',
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: 'Emily Johnson',
//     avatar: 'https://i.pravatar.cc/100?img=3',
//     content: 'I was impressed by the innovative solutions provided. The product not only met but exceeded my expectations. The user-friendly interface and robust features have significantly improved my workflow. Kudos to the team for creating such an outstanding product!',
//     rating: 5,
//   }
// ];
// const StarRating = ({ rating }) => (
//   <div className="flex justify-center mt-4">
//     {[...Array(5)].map((_, i) => (
//       <svg key={i} className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//       </svg>
//     ))}
//   </div>
// );
// const TestimonialCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };
//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };
//   return (
//     <div className="max-w-5xl px-4 py-12 mx-auto">
//     <div class="text-center my-16 mb-24 ">
//   <h2 class="text-3xl md:text-4xl font-bold text-black">Unforgettable Adventures Await</h2>
//   <div class="w-[500px] h-1 mx-auto mt-6 mb-4 bg-blue-600"></div>
//   <p class="text-lg text-center text-gray-600">Explore breathtaking destinations and create memories that last a lifetime!</p>
// </div>
//       <div className="relative flex items-center justify-center ">
//         <button 
//           onClick={prevTestimonial} 
//           className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 p-2 text-xl text-white transform -translate-y-1/2 bg-blue-600 rounded-full shadow-md hover:bg-blue-700 top-1/2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <div className="flex items-center justify-center w-full -space-x-56">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={testimonial.id}
//               className={`transition-all duration-500 ease-in-out flex-shrink-0 w-3/5 ${
//                 index === currentIndex
//                   ? 'scale-100 z-10 opacity-100 blur-0 translate-x-0'
//                   : 'scale-90 z-0 opacity-50 blur-sm translate-x-4'
//               }`}
//             >
//               {index === currentIndex && (
//                 <div className='w-full p-6 bg-[#0050CB] rounded-3xl -rotate-3'>
//                   <div className="relative w-full p-8 shadow-lg rotate-3 bg-gradient-to-r from-[#568ADA] to-[#568ADA] rounded-3xl">
//                     <div className="absolute transform -translate-x-1/2 -top-12 left-[50%]">
//                       <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 border-4 border-white rounded-full" />
//                     </div>
//                     <h3 className="mt-6 mb-4 font-semibold text-center text-white">{testimonial.name}</h3>
//                     <p className="mb-4 text-sm text-center text-white">{testimonial.content}</p>
//                     <StarRating rating={testimonial.rating} />
//                   </div>
//                 </div>
//               )}
//               {index !== currentIndex && (
//                 <div className="relative w-full p-8 shadow-lg bg-gradient-to-r from-[#568ADA] to-[#568ADA] rounded-3xl">
//                   <div className="absolute transform -translate-x-1/2 -top-12 left-[50%]">
//                     <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 border-4 border-white rounded-full" />
//                   </div>
//                   <h3 className="mt-6 mb-4 font-semibold text-center text-white">{testimonial.name}</h3>
//                   <p className="mb-4 text-sm text-center text-white">{testimonial.content}</p>
//                   <StarRating rating={testimonial.rating} />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         <button 
//           onClick={nextTestimonial} 
//           className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 p-2 text-xl text-white transform -translate-y-1/2 bg-blue-600 rounded-full shadow-md hover:bg-blue-700 top-1/2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };
// export default TestimonialCarousel;










///---------------------------------------------------------------------------------------------------------------------///







import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/100?img=1',
    content: 'Lorem is a dummy text. hi hello how are you, thanks yes you are right, very great service. This is very nice, great. This is very nice, great. nice Service is amazing Lorem is a dummy text. hi hello how are you, thanks yes you are right very great service. This is very nice, great. This is very nice, great. nice Service is amazing',
    rating: 5,
  },
  {
    id: 2,
    name: 'John Smith',
    avatar: 'https://i.pravatar.cc/100?img=2',
    content: 'Exceptional service! The team went above and beyond to meet my needs. Their attention to detail and prompt responses made the entire experience smooth and enjoyable. I highly recommend their services to anyone looking for top-notch quality and professionalism.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Johnson',
    avatar: 'https://i.pravatar.cc/100?img=3',
    content: 'I was impressed by the innovative solutions provided. The product not only met but exceeded my expectations. The user-friendly interface and robust features have significantly improved my workflow. Kudos to the team for creating such an outstanding product!',
    rating: 5,
  }
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mt-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-6 h-6 ${i < rating ? 'text-[#f58d03]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

//   #f58d03 yellow

// #007fac blue

  return (
    <div className="max-w-5xl px-4 py-8 mx-auto mb-20 ">
      <div className="my-16 mb-24 text-center">
        <h2 className="text-3xl font-bold text-[#007fac] md:text-4xl">Unforgettable Adventures Await</h2>
        <div className="w-[500px] h-1 mx-auto mt-6 mb-4 bg-[#f58d03]"></div>
        <p className="text-xl text-center text-gray-500">Explore breathtaking destinations and create memories that last a lifetime!</p>
      </div>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevTestimonial}
          className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 p-2 text-xl text-white transform -translate-y-1/2 bg-[#007fac] rounded-full shadow-md hover:bg-[#007fac] top-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center justify-center w-full -space-x-56">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-500 ease-in-out flex-shrink-0 w-3/5 ${
                index === currentIndex
                  ? 'scale-100 z-10 opacity-100 blur-0 translate-x-0'
                  : 'scale-90 z-0 opacity-50 blur-sm translate-x-4'
              }`}
              style={{ zIndex: index === currentIndex ? 20 : 0 }}
            >
              <div className="relative w-full p-6 bg-[#007fac] rounded-3xl -rotate-3">
                <div className="relative w-full p-8 shadow-lg rotate-3 bg-gradient-to-r from-[#5494b1] to-[#007fac] rounded-3xl">
                  <div className="absolute transform -translate-x-1/2 -top-12 left-[50%]">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 border-4 border-[#f58d03] rounded-full"
                    />
                  </div>
                  <h3 className="mt-6 mb-4 font-semibold text-center text-white">{testimonial.name}</h3>
                  <p className="mb-4 text-sm text-center text-white">{testimonial.content}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextTestimonial}
          className={`absolute right-0 flex items-center justify-center w-10 h-10 p-2 text-xl text-white transform -translate-y-1/2 bg-[#007fac] rounded-full shadow-md hover:bg-[#007fac] top-1/2 ${
            currentIndex === testimonials.length - 1 ? 'z-0' : 'z-10'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;















