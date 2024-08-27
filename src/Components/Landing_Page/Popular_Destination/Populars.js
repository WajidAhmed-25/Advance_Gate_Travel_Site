import React from "react";

function Populars() {
  const regions = [
    "Hawaii",
    "NYC",
    "Istanbul",
    "Kuala Lampor",
    "Karachi",
    "USA",
    "Dubai",
    "Qatar",
    "Abu Dhabi",
    "Florida, US",
    "Alaska",
    "Como",
    "Africa",
    "Barcelona",
    "Germany",
    "Malaysia",
    "Lahore",
    "Memphis",
    "Las Angeles",
    "Seattle",
  ];

  return (
    <div className="p-8 px-[60px] ">
      <h2 className="mb-4 text-2xl font-bold">Destinations We Love</h2>
      <div class="w-[240px] h-1  mt-2 mb-4 bg-blue-200"></div>
      <p className="mb-8 text-gray-500">
        Lorem is a dummy text and this is a mockup/sample website design
      </p>
      <div className="flex mb-8 space-x-8">
        <button className="pb-2 text-blue-500 border-b-2 border-blue-500">Regions</button>
        <button className="pb-2 text-gray-700">Places</button>
        <button className="pb-2 text-gray-700">Interest</button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {regions.map((region, index) => (
          <div key={index} className="text-center">
            <a href="#" className="text-blue-500 hover:underline">{region}</a>
            <p className="text-gray-500">12,300 properties</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Populars;
