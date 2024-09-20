import './hex.css';

import v1 from './brazil.jpg'
import v2 from './canada.jpg'
import v3 from  './denmark.jpg'
import v4 from  './Egypt.jpg'
import v5 from  './France.jpg' 
import v6 from  './Germany.jpg'
import v7 from  './India.jpg'
import v8 from  './Japan.jpg'
import v9 from  './Kenya.jpg'
import v10 from  './Mexico.jpg'
import v11 from  './Norway.jpg'
import v12 from  './Russia.jpg'
import v13 from  './spain.jpg'
import v14 from  './Turkey.jpg'
import v15 from  './UK.jpg'
import v16 from  './US.jpg'
import v17 from  './sydney.jpg'



import './hex.css';



export default function Hex_Cards() {
    const cards = [
   
        { image:v1 , name: 'Brazil' },
        { image:v2 , name: 'Canada' },
        { image: v3, name: 'Denmark' },
        { image: v4, name: 'Egypt' },
        { image:v5 , name: 'France' },
        { image: v6, name: 'Japan' },
        { image: v7, name: 'India' },
        { image: v8 , name: 'Japan' },
        { image: v9, name: 'Kenya' },
        { image: v10, name: 'Mexico' },
        { image: v11 , name: 'Norway' },
        { image: v12, name: 'Russia' },
        { image: v13, name: 'Spain' },
        { image: v14, name: 'Turkey' },
        { image: v15 , name: 'United Kingdom' },
        { image: v16, name: 'United States' },
        { image:v17, name: 'Australia' },
    ];

    //   #f58d03 yellow

// #007fac blue

    return (

<>

<div className="mt-20 text-center">
<h2 className="text-3xl font-bold tracking-tight text-[#007fac] sm:text-4xl">Explore the True Beauty of the World</h2>
<div class="w-[480px] h-1 mx-auto mt-4 mb-4 bg-[#f58d03]"></div>
<p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
   Top Tourist Destinations On Finger Tips
</p>
</div>

        
        <div className="flex flex-wrap justify-center mb-40">
            <div className="hex-grid">
                <div className="hex-row">
                    {cards.slice(0, 4).map((card, index) => (
                        <div key={index} className="hex">
                            <div className="hex-in">
                                <div
                                    className="relative transition duration-300 ease-in-out cursor-pointer hex-bg brightness-[70%] hover:brightness-100"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white transition duration-100 ease-in-out opacity-0 hover:opacity-100"  style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
                                        {card.name}  
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hex-row">
                    {cards.slice(4, 9).map((card, index) => (
                        <div key={index} className="hex">
                            <div className="hex-in">
                                <div
                                    className="relative transition duration-300 ease-in-out cursor-pointer hex-bg brightness-[70%] hover:brightness-100"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white transition duration-300 ease-in-out opacity-0 hover:opacity-100" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
                                        {card.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hex-row">
                    {cards.slice(9, 13).map((card, index) => (
                        <div key={index} className="hex">
                            <div className="hex-in">
                                <div
                                    className="relative transition duration-300 ease-in-out cursor-pointer hex-bg brightness-[70%] hover:brightness-100"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white transition duration-300 ease-in-out opacity-0 hover:opacity-100"  style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>
                                        {card.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        </>
    );
}



