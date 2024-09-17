import { useState, useEffect } from "react";
import data from './plane_World.png';
export default function Track_Visa() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        { title: "Book an Appointment", description: "Schedule your appointment with us", buttonText: "BOOK NOW" },
        { title: "Track your Application", description: "Stay informed of your application status", buttonText: "TRACK NOW" },
        { title: "Find a Centre", description: "Information about your local centre", buttonText: "FIND NOW" },
        { title: "Consult an Expert", description: "Get advice from our qualified professionals", buttonText: "CONSULT NOW" },
        { title: "Order Online", description: "Place an order for our services online", buttonText: "ORDER NOW" },
        { title: "Explore Services", description: "Discover a wide range of services we offer", buttonText: "EXPLORE NOW" },
        { title: "View Our Gallery", description: "Browse through our collection of images", buttonText: "VIEW NOW" },
        { title: "Check Pricing", description: "Get a quote or check our pricing plans", buttonText: "CHECK NOW" },
        { title: "Subscribe for Updates", description: "Get the latest news and updates", buttonText: "SUBSCRIBE NOW" },
        { title: "Join Our Newsletter", description: "Receive our newsletter directly in your inbox", buttonText: "JOIN NOW" },
        { title: "Customer Support", description: "Contact our support team for assistance", buttonText: "CONTACT NOW" },
        { title: "View Our Gallery", description: "Browse through our collection of images", buttonText: "VIEW NOW" },
        { title: "Check Pricing", description: "Get a quote or check our pricing plans", buttonText: "CHECK NOW" },
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
    useEffect(() => {
        const interval = setInterval(nextSlide, 3500); 
        return () => clearInterval(interval); 
    }, []); 

//     #f58d03 yellow

// #007fac blue
    return (
        <>
            <div className="pt-12 pb-16 bg-gray-100">
                <div className="flex flex-col items-center px-4 mt-4 text-center">
                    <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-[#007fac]">
                        Already applied for a visa?
                    </h1>
                    <div className="h-[4px] w-[880px] md:w-[540px] sm:w-[460px] max-xs:w-[300px] pl-4 pr-4 bg-[#f58d03] mt-[18px]"></div>
                    <p className="mt-4 text-base text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
                        Here's what else you can do
                    </p>
                </div>
                <div className="relative w-full mx-auto h-[330px] pt-2 mt-20 overflow-hidden max-w-[93%] bg-[#007fac]">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out" 
                        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                    >
                        {cards.map((card, index) => (
                            <div key={index} className="flex-shrink-0 w-1/3 pt-8 pl-4 pr-4">
                                <div className="flex flex-col items-center p-8 text-center h-[250px] bg-white rounded-lg shadow-lg">
                                    <div className="absolute w-20 h-20 -mt-16 bg-white border-2 border-[#f58d03] rounded-full shadow-lg">
                                        <img src={data} alt="Icon" className="w-20 h-20 mx-auto rounded-full" />
                                    </div>
                                    <br/>
                                    <h2 className="mb-4 text-2xl font-bold text-[#f58d03]">{card.title}</h2>
                                    <p className="mb-6 text-gray-600">{card.description}</p>
                                    <button className="px-4 py-2 font-semibold text-white bg-[#007fac] border-[#f58d03] rounded-lg shadow-lg hover:bg-[#007fac] hover:scale-125 hover:transition-all hover:duration-300">
                                        {card.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute left-0 p-4 text-white transform -translate-y-1/2 bg-[#007fac] border-[#f58d03] border-2 rounded-full top-1/2 hover:bg-[#f58d03]"
                        onClick={prevSlide}
                    >
                        &lt;
                    </button>
                    <button
                        className="absolute right-0 p-4 text-white transform -translate-y-1/2 bg-[#007fac] border-[#f58d03] border-2 rounded-full top-1/2 hover:bg-[#f58d03]"
                        onClick={nextSlide}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </>
    );
}