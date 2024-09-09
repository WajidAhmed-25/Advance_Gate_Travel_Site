

export default function Visa_Cards() {
    return (
    
      <div className="w-full mx-auto mt-12 overflow-x-hidden ">

<div class="flex justify-center flex-col items-center px-4 py-6">
    <h1 class="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        Accurate Travel Solutions for Travelers and Travel Managers
    </h1>
    <div className="h-[4px] w-[880px] md:w-[740px]   sm:w-[460px]  max-xs:w-[300px] pl-4 pr-4 bg-blue-800 mt-[18px]"></div>
 
</div>

        <div className="grid grid-cols-1 gap-8 mt-24 md:grid-cols-2 lg:grid-cols-3 max-xl:gap-6">
          
          {/* Card 1 */}
          <div className="relative w-[90%] p-2 mb-32 mx-auto bg-blue-800 rounded-2xl md:max-w-xs lg:max-w-md -rotate-12">
            <div className="relative w-full p-6 h-[257px] text-center bg-gradient-to-br from-[#ffffff] via-[#719ae1] to-[#ffffff] rounded-lg rotate-12 shadow-md border-2 border-[#0050CB]">
              <h2 className="mb-2 text-2xl font-bold tracking-wider text-center sm:text-xl">TRAVEL VISA</h2>
              <p className="mt-4 mb-4 text-sm text-center sm:text-base">Navigate global travel effortlessly. Our expert visa services ensure seamless entry to every destination.</p>
              <button class="py-2.5 px-6 mt-4 rounded-lg text-sm font-medium text-white bg-blue-900 hover:scale-125 transition-all duration-300 cursor-pointer">Learn More</button>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="relative w-[90%] p-2 mx-auto mb-32 bg-blue-800 rotate-12 rounded-2xl md:max-w-xs lg:max-w-md">
            <div className="relative w-full p-6 h-[257px] text-center -rotate-12 bg-gradient-to-br from-[#ffffff] via-[#719ae1] to-[#ffffff] rounded-lg shadow-md border-2 border-[#0050CB]">
              <h2 className="mb-2 text-2xl font-bold tracking-wider text-center sm:text-xl">FAST PASSPORT APPLICATIONS</h2>
              <p className="mt-4 mb-4 text-sm text-center sm:text-base">

              For urgent travel, our expedited passport services ensure a fast, reliable start.</p>
              <button class="py-2.5 px-6 mt-4 rounded-lg text-sm font-medium text-white bg-blue-900 hover:scale-125 transition-all duration-300 cursor-pointer">Learn More</button>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="relative w-[90%] p-2 mx-auto mb-32 bg-blue-800 rounded-2xl md:max-w-xs lg:max-w-md -rotate-12">
            <div className="relative w-full p-6 h-[257px] text-center rotate-12 bg-gradient-to-br from-[#ffffff] via-[#719ae1] to-[#ffffff] rounded-lg shadow-md border-2 border-[#0050CB]">
              <h2 className="mb-2 text-2xl font-bold tracking-wider text-center sm:text-xl">CORPORATE SOLUTIONS</h2>
              <p className="mt-4 mb-4 text-sm text-center sm:text-base">Global immigration and travel solutions for seamless management and unified programs.</p>
        
          
    <button class="py-2.5 px-6 mt-4 rounded-lg text-sm font-medium text-white bg-blue-900 hover:scale-125 transition-all duration-300 cursor-pointer">Learn More</button>

            </div>
          </div>
  
        </div>
      </div>
    );
  }