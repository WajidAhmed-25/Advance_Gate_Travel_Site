import { useState } from "react";
import data from './plane_World.png'

export default function Track_Visa(){


  
  


    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
      { title: "Book an Appointment", description: "Schedule your appointment with us", buttonText: "BOOK NOW" },
      { title: "Track your Application", description: "Stay informed of your application status", buttonText: "TRACK NOW" },
      { title: "Find a Centre", description: "Information about your local centre", buttonText: "FIND NOW" },
      { title: "Another Service", description: "Description of another service", buttonText: "DO NOW" },

    ];
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 1 >= cards.length ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1
      );
    };


    return(

        <>
        
        <div className="bg-white">

 <div className="flex flex-col items-center px-4 mt-16 text-center">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
        Already applied for a visa?
      </h1>
      <p className="text-base text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
        Here's what else you can do
      </p>
    </div>







    
    
    {/* <div className="relative w-full mx-auto h-[330px] pt-2 mt-20 overflow-hidden  max-w-[90%] bg-green-500">
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-1/3 pt-8 pl-4 pr-4 ">
            <div className="flex flex-col items-center p-8 text-center h-[250px] bg-white  shadow-lg">
           
              <div className="absolute w-20 h-20 -mt-16 bg-white rounded-full shadow-lg">
                <img src={data} alt="Icon" className="w-20 h-20 mx-auto rounded-full" />
              </div>
              <br/>
              <h2 className="mb-4 text-2xl font-bold text-blue-700">{card.title}</h2>
              <p className="mb-6 text-gray-600">{card.description}</p>
              <button className="px-4 py-2 text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-blue-700 rounded-full top-1/2 hover:bg-blue-800"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-blue-700 rounded-full top-1/2 hover:bg-blue-800"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div> */}







<div className="relative w-full mx-auto h-[330px] pt-2 mt-20 overflow-hidden  max-w-[93%] bg-[#0050CB] ">
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-1/3 pt-8 pl-4 pr-4 ">
            <div className="flex flex-col items-center p-8 text-center h-[250px] bg-white  shadow-lg">
                
              <div className="absolute w-20 h-20 -mt-16 bg-white rounded-full shadow-lg border-[#0050CB] border-2">
                <img src={data} alt="Icon" className="w-20 h-20 mx-auto rounded-full" />
              </div>
              
              <br/>
              <h2 className="mb-4 text-2xl font-bold text-blue-700">{card.title}</h2>
              <p className="mb-6 text-gray-600">{card.description}</p>
              <button className="px-4 py-2 text-white bg-blue-700 rounded-lg shadow-lg hover:bg-blue-800">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-blue-700 rounded-full top-1/2 hover:bg-blue-800"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-blue-700 rounded-full top-1/2 hover:bg-blue-800"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>













    


        
    </div>
        
        
        </>
    )
}