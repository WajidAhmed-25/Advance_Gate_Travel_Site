
import { useState } from "react";
import React from "react";

function Populars() {



  

  const [activeTab, setActiveTab] = useState('Plan Your Trip');

  const tabs = [
    'Plan Your Trip',
    'Destinations',
    'Services',
    'Questions',
    'Travel Deals'
  ];









  const renderContent = (tab) => {
    switch (tab) {
      case 'Plan Your Trip':
        return <div>

<div class=" h-[500px] flex flex-col justify-center sm:py-2">
  <div class="relative sm:mx-auto ">
    <div
      class="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

      <div class="max-w-md mx-auto">
        <div className="w-full font-semibold text-center">
          <h1 class="text-2xl font-semibold  ">Book Now</h1>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="relative">
              <input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Add Your Name here" />
              <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Full Name</label>
            </div>
            <div class="relative">
              <input autocomplete="off" id="password" name="password" type="email" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Add Your Email address" />
              <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Email</label>
            </div>
            <div class="relative w-full justify-center flex ">
              <button class="bg-blue-800 text-white rounded-md px-4 py-1">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <button class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
      
          <span>Continue with Google</span>
        </button>
      </div>

    </div>
  </div>
</div>


     
        </div>;

        
      case 'Destinations':
        return <div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
    <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-blue-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">Switzerland</span>
        </div>
    </div>
    <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-blue-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">Turkey</span>
        </div>
    </div>
    <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-blue-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">UK</span>
        </div>
    </div>
    <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-blue-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">Finland</span>
        </div>
    </div>
    <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-blue-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">Europe</span>
        </div>
    </div>
    <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-blue-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">North America</span>
        </div>
    </div>
    <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-blue-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">America</span>
        </div>
    </div>
    <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">Australia</span>
        </div>
    </div>
</div>
        </div>;

        
      case 'Services':
        return <div>


<div class="container mx-auto p-6">
  <h2 class="text-4xl font-bold text-center mb-12 transition-transform duration-500 transform hover:scale-105">
    Our Travel Services
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="service-card bg-white rounded-lg shadow-lg p-6 text-center">
      <div class="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
        🛫
      </div>
      <h3 class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
        Flight Booking
      </h3>
      <p class="text-gray-600">Book flights to your favorite destinations with the best deals available.</p>
    </div>
    <div class="service-card bg-white rounded-lg shadow-lg p-6 text-center">
      <div class="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
        🏨
      </div>
      <h3 class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
        Hotel Reservations
      </h3>
      <p class="text-gray-600">Find and reserve comfortable accommodations that suit your budget and preferences.</p>
    </div>
    <div class="service-card bg-white rounded-lg shadow-lg p-6 text-center">
      <div class="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
        🚗
      </div>
      <h3 class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
        Car Rentals
      </h3>
      <p class="text-gray-600">Rent a car for your trips with flexible options and affordable rates.</p>
    </div>
  </div>
</div>




          
        </div>;













      case 'Questions':
        return <div>




<div class="py-4 max-w-screen-sm mx-auto">
    <div class="text-center mb-16">
        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Frequently Asked <span class="text-blue-800">Questions</span>
        </h3>
    </div>

    <div class="px-10 sm:px-16">
        <div class="ml-5">

            <div class="flex items-start my-8">
                <div
                    class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-blue-800 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="text-md">
                    <h1 class="text-gray-900 font-semibold mb-2">What services does your travel agency offer?</h1>
                    <p class="text-gray-500 text-sm">Our travel agency provides a wide range of services including flight bookings, hotel reservations, visa assistance, customized travel packages, travel insurance, and car rentals. We also offer special deals on group tours and family vacations.</p>
                </div>
            </div>

            <div class="flex items-start my-8">
                <div
                    class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-blue-800 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="text-md">
                    <h1 class="text-gray-900 font-semibold mb-2">How do I book a trip with your travel agency?</h1>
                    <p class="text-gray-500 text-sm">You can book a trip with us by visiting our website, calling our customer service hotline, or visiting one of our office locations. Simply provide your travel details, and we’ll take care of the rest, from flight bookings to accommodation arrangements.</p>
                </div>
            </div>

            <div class="flex items-start my-8">
                <div
                    class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-blue-800 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="text-md">
                    <h1 class="text-gray-900 font-semibold mb-2">Do you offer customized travel packages?</h1>
                    <p class="text-gray-500 text-sm">Yes, we offer customized travel packages tailored to your specific needs and preferences. Whether you're planning a honeymoon, a family vacation, or a solo adventure, we can create a package that suits your budget and interests.</p>
                </div>
            </div>


       

       

       

        </div>
    </div>
</div>







          
        </div>;
      case 'Travel Deals':
        return <div>



<section class="px-4">
  
    <div
        class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-800 p-4 sm:p-4 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20">
        <div class="flex flex-col gap-4">
            <div class="">
                <span class="text-gray-200">Black Friday Sale</span>
                <br/>
                <span class="text-gray-200 text-4xl text-white font-semibold">20% off Every Product</span>
            </div>
            <a href="" target="_blank" rel="noreferrer"
                class="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group">
                <span>Buy now</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                    class="group-hover:translate-x-1 transition-transform ease duration-200" width="1em" height="1em"
                    viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z">
                    </path>
                </svg>
            </a>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-gray-100" viewBox="0 0 15 15">
                <path fill="currentColor" fill-rule="evenodd"
                    d="M4.5 0A2.5 2.5 0 0 0 2 2.5v.286c0 .448.133.865.362 1.214H1.5A1.5 1.5 0 0 0 0 5.5v1A1.5 1.5 0 0 0 1.5 8H7V4h1v4h5.5A1.5 1.5 0 0 0 15 6.5v-1A1.5 1.5 0 0 0 13.5 4h-.862c.229-.349.362-.766.362-1.214V2.5A2.5 2.5 0 0 0 10.5 0c-1.273 0-2.388.68-3 1.696A3.498 3.498 0 0 0 4.5 0ZM8 4h2.786C11.456 4 12 3.456 12 2.786V2.5A1.5 1.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V4ZM7 4H4.214C3.544 4 3 3.456 3 2.786V2.5A1.5 1.5 0 0 1 4.5 1A2.5 2.5 0 0 1 7 3.5V4Z"
                    clip-rule="evenodd"></path>
                <path fill="currentColor" d="M7 9H1v3.5A2.5 2.5 0 0 0 3.5 15H7V9Zm1 6h3.5a2.5 2.5 0 0 0 2.5-2.5V9H8v6Z">
                </path>
            </svg>
        </div>
    </div>

    
    <div
        class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-800 p-2 sm:p-4  rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-12">
        <div class="flex flex-col gap-4">
            <div class="">
                <span class="text-gray-200">Holiday Special</span>
             <br/>
                <span class="text-gray-200 text-4xl text-white font-semibold">Buy 2 Get 1 Free</span>
            </div>
            <a href="" target="_blank" rel="noreferrer"
                class="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group">
                <span>Shop now</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                    class="group-hover:translate-x-1 transition-transform ease duration-200" width="1em" height="1em"
                    viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z">
                    </path>
                </svg>
            </a>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-gray-100" viewBox="0 0 15 15">
                <path fill="currentColor" fill-rule="evenodd"
                    d="M4.5 0A2.5 2.5 0 0 0 2 2.5v.286c0 .448.133.865.362 1.214H1.5A1.5 1.5 0 0 0 0 5.5v1A1.5 1.5 0 0 0 1.5 8H7V4h1v4h5.5A1.5 1.5 0 0 0 15 6.5v-1A1.5 1.5 0 0 0 13.5 4h-.862c.229-.349.362-.766.362-1.214V2.5A2.5 2.5 0 0 0 10.5 0c-1.273 0-2.388.68-3 1.696A3.498 3.498 0 0 0 4.5 0ZM8 4h2.786C11.456 4 12 3.456 12 2.786V2.5A1.5 1.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V4ZM7 4H4.214C3.544 4 3 3.456 3 2.786V2.5A1.5 1.5 0 0 1 4.5 1A2.5 2.5 0 0 1 7 3.5V4Z"
                    clip-rule="evenodd"></path>
                <path fill="currentColor" d="M7 9H1v3.5A2.5 2.5 0 0 0 3.5 15H7V9Zm1 6h3.5a2.5 2.5 0 0 0 2.5-2.5V9H8v6Z">
                </path>
            </svg>
        </div>
    </div>

  
    <div
        class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-800 p-2 sm:p-4 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-12">
        <div class="flex flex-col gap-4">
            <div class="">
                <span class="text-gray-200">Summer Bonanza</span>
                <br/>
                <span class="text-gray-200 text-4xl text-white font-semibold">Up to 50% off Selected Items</span>
            </div>
            <a href="" target="_blank" rel="noreferrer"
                class="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group">
                <span>Discover deals</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                    class="group-hover:translate-x-1 transition-transform ease duration-200" width="1em" height="1em"
                    viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z">
                    </path>
                </svg>
            </a>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-gray-100" viewBox="0 0 15 15">
                <path fill="currentColor" fill-rule="evenodd"
                    d="M4.5 0A2.5 2.5 0 0 0 2 2.5v.286c0 .448.133.865.362 1.214H1.5A1.5 1.5 0 0 0 0 5.5v1A1.5 1.5 0 0 0 1.5 8H7V4h1v4h5.5A1.5 1.5 0 0 0 15 6.5v-1A1.5 1.5 0 0 0 13.5 4h-.862c.229-.349.362-.766.362-1.214V2.5A2.5 2.5 0 0 0 10.5 0c-1.273 0-2.388.68-3 1.696A3.498 3.498 0 0 0 4.5 0ZM8 4h2.786C11.456 4 12 3.456 12 2.786V2.5A1.5 1.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V4ZM7 4H4.214C3.544 4 3 3.456 3 2.786V2.5A1.5 1.5 0 0 1 4.5 1A2.5 2.5 0 0 1 7 3.5V4Z"
                    clip-rule="evenodd"></path>
                <path fill="currentColor" d="M7 9H1v3.5A2.5 2.5 0 0 0 3.5 15H7V9Zm1 6h3.5a2.5 2.5 0 0 0 2.5-2.5V9H8v6Z">
                </path>
            </svg>
        </div>
    </div>
</section>







        </div>;
      default:
        return null;
    }
  };


  
  return (
    <>



<div className='w-full mt-32 mb-8 text-center'>
<h2 className="pb-2 mt-12 text-4xl font-bold text-center">Explore the Travel Arena</h2>
  <div class="w-[380px] h-1 mx-auto mt-2 mb-4 bg-blue-800/70"></div>
  <p className="text-lg text-center text-gray-600 ">Unveil New Destinations with Ease !</p>    
  </div>




<div className="w-full max-w-5xl mx-auto">
      <ul className="grid grid-flow-col p-1 mt-24 font-semibold text-center text-white bg-blue-800 rounded-full">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              className={`flex justify-center py-4 w-full ${
                activeTab === tab
                  ? 'bg-white rounded-full shadow text-indigo-900'
                  : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4 mt-4 mb-12 border rounded ">
        {renderContent(activeTab)}
      </div>
    </div>










    

    </>
  );
}

export default Populars;
