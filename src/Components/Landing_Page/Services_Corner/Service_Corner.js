
import { FaPlaneDeparture, FaHotel, FaCar } from 'react-icons/fa'

export default function Services_Corner(){
    return(
        <>
        <div>
<div class="container mx-auto p-6 mt-6 bg-gray-100">
  <h2 class="text-4xl font-bold text-center mb-4 mt-12 transition-transform duration-500 transform hover:scale-105">
    Our Travel Services
  </h2>
  <div class="w-[270px] h-1 mx-auto mt-2  bg-blue-800 mb-4"></div>
  <p className="max-w-2xl mx-auto mt-3 mb-20 text-xl text-center text-gray-500 sm:mt-4">Crafting unforgettable journeys, one trip at a time</p>

  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    <div class="service-card bg-white rounded-lg shadow-lg p-12 text-center  border-black/20 border-4">
      {/* <div class="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
        🛫
      </div> */}
           <div className="mx-auto mb-4 ml-auto text-5xl transition-transform duration-300 transform cursor-pointer w-fit hover:scale-110">
                <FaPlaneDeparture className='w-16 h-16 mx-auto text-blue-900'/>
              </div>
      <h3 class="text-2xl font-semibold mb-2 transition-colors  duration-300 hover:text-blue-800">
        Flight Booking
      </h3>
      <p class="text-gray-600">Book flights to your favorite destinations with the best deals available.</p>
    </div>
    <div class="service-card bg-white rounded-lg shadow-lg p-12 text-center border-black/20 border-4 w-fit">
      <div class="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110 cursor-pointer">
      <FaHotel className='w-16 h-16 mx-auto text-blue-900'/>
      </div>
      <h3 class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-800">
        Hotel Reservations
      </h3>
      <p class="text-gray-600">Find and reserve comfortable accommodations that suit your budget and preferences.</p>
    </div>
    <div class="service-card bg-white rounded-lg shadow-lg p-12 text-center border-black/20 border-4 w-fit">
      <div class="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110 cursor-pointer">
      <FaCar className='w-16 h-16 mx-auto text-blue-900' />
      </div>
      <h3 class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-800">
        Car Rentals
      </h3>
      <p class="text-gray-600">Rent a car for your trips with flexible options and affordable rates.</p>
    </div>
  </div>
</div>
        </div>
        </>
    )
}