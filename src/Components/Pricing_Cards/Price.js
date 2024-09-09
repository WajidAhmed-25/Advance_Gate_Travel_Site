import React from 'react';




// Price.js
export default function Price({ pricingData,name }) {
    return (

        <>

<div className='w-full mt-20 mb-4 text-center'>
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-2xl md:text-5xl">{name} Visa Categories</h2>

        <div class="w-[500px] h-1 mx-auto mt-6 mb-12  bg-blue-900"></div>
      </div>
        
      <ul className="grid gap-6 p-5 mt-6 md:gap-12 md:grid-cols-3">
        {pricingData.map((plan, index) => (
          <li
            key={index}
            className="p-6 mb-16 transition-transform duration-200 shadow-xl cursor-pointer rounded-xl ring-1 ring-black/5 hover:scale-105 shadow-blue-900/50"
          >
            <h3 className="font-bold tracking-tight text-blue-900">{plan.title}</h3>
            <p className="mt-6 text-4xl font-bold tracking-tighter">{plan.price}</p>
            <p className="mt-3 font-semibold text-blue-900">{plan.description}</p>
  
            <ul className="mt-6 space-y-1.5">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-1.5 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className='font-semibold text-blue-900'>{feature}</span>
                </li>
              ))}
            </ul>
  
            <div className="flex justify-center w-full">
              <a
                href={plan.link}
                className="mt-6 inline-flex justify-center rounded-xl bg-blue-900 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-blue-900/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              >
                Apply Now
              </a>
            </div>
          </li>
        ))}
      </ul>

      </>
    );
  }
  