import { Link } from 'react-router-dom';

import p1 from './w1.jpg'
import p2 from './w2.jpg'
import p3 from './w3.jpg'
import p4 from './w4.jpg'
import p5 from './w5.jpg'

export default function Image_Component(){
    const destinations = [
        { name: "Toronto", image: p1, flag: "🇵🇰" },
        { name: "UK", image: p2, flag: "🇵🇰" },
        { name: "Australia", image:p3, flag: "🇦🇪" },
        { name: "Venice", image: p4, flag: "🇵🇰" },
        { name: "Rome", image: p5, flag: "🇸🇦" },
      ];
      const DestinationCard = ({ name, country, image }) => (
        <div
          className="relative z-10 w-full transition-all duration-300 bg-center bg-cover rounded-lg shadow-lg cursor-pointer h-96 hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute top-0 left-0 p-2 text-white bg-black bg-opacity-50 rounded-tl-lg rounded-br-lg">
          <span className='text-xl'>{name} </span>  <span className="ml-2">{country}</span>
          </div>
        </div>
      );

      const DestinationCard2 = ({ name, country, image }) => (
        <div
          className="relative z-10 w-full transition-all duration-300 bg-center bg-cover rounded-lg shadow-lg cursor-pointer h-72 hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute top-0 left-0 p-2 text-white bg-black bg-opacity-50 rounded-tl-lg rounded-br-lg">
          <span className='text-xl'>{name} </span>  <span className="ml-2">{country}</span>
          </div>
        </div>
      );
    return(
        <>
<div className="p-4 mt-20 mb-4 bg-gray-100">
<h2 className="pt-12 pb-2 mt-4 text-4xl font-bold text-center">Explore the World</h2>
  <div class="w-[300px] h-1 mx-auto mt-2 mb-4 bg-blue-800"></div>
  <p className="mb-12 text-xl text-center text-gray-500 ">Immerse yourself in breathtaking destinations!</p>
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-12 mt-4 sm:grid-cols-2">
        {destinations.slice(0, 2).map((destination, index) => (
          <DestinationCard
            key={index}
            name={destination.name}
            country={destination.country}
            image={destination.image}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 mt-4 mb-16 sm:grid-cols-3">
        {destinations.slice(2, 5).map((destination, index) => (
          <DestinationCard2
            key={index}
            name={destination.name}
          country={destination.country}
         image={destination.image}
          />
        ))}
      </div>
    </div>
  </div>
    </>
    )
}


























































