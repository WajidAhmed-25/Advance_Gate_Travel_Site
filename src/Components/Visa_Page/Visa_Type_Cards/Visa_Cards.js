

export default function Visa_Cards() {
    return (
    
      <div className="w-full mx-auto mt-12 overflow-x-hidden ">

<div class="flex justify-center flex-col items-center px-4 py-6">
    <h1 class="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        Accurate Travel Solutions for Travelers and Travel Managers
    </h1>
    <div className="h-[3px] w-[880px] md:w-[700px]   sm:w-[460px]  max-xs:w-[300px] pl-4 pr-4 bg-blue-400 mt-[18px]"></div>
</div>

        <div className="grid grid-cols-1 gap-8 mt-24 md:grid-cols-2 lg:grid-cols-3 max-xl:gap-6">
          
          {/* Card 1 */}
          <div className="relative w-[90%] p-2 mb-32 mx-auto bg-blue-700 rounded-2xl md:max-w-xs lg:max-w-md -rotate-12">
            <div className="relative w-full p-6 h-[257px] text-center bg-gradient-to-br from-[#ffffff] via-[#719ae1] to-[#ffffff] rounded-lg rotate-12 shadow-md border-2 border-[#0050CB]">
              <h2 className="mb-2 text-2xl font-bold tracking-wider text-center sm:text-xl">TRAVEL VISA</h2>
              <p className="mt-4 mb-4 text-sm text-center sm:text-base">Navigate global travel effortlessly. Our expert visa services ensure seamless entry to every destination.</p>
              <a href="#" className="font-semibold text-white hover:underline">Learn More</a>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="relative w-[90%] p-2 mx-auto mb-32 bg-blue-700 rotate-12 rounded-2xl md:max-w-xs lg:max-w-md">
            <div className="relative w-full p-6 h-[257px] text-center -rotate-12 bg-gradient-to-br from-[#ffffff] via-[#719ae1] to-[#ffffff] rounded-lg shadow-md border-2 border-[#0050CB]">
              <h2 className="mb-2 text-2xl font-bold tracking-wider text-center sm:text-xl">FAST PASSPORT APPLICATIONS</h2>
              <p className="mt-4 mb-4 text-sm text-center sm:text-base">For urgent travel, when there's simply no margin for error, our expedited and accurate passport services jumpstart your trip with confidence and ease.</p>
              <a href="#" className="font-semibold text-white hover:underline">Learn More</a>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="relative w-[90%] p-2 mx-auto mb-32 bg-blue-700 rounded-2xl md:max-w-xs lg:max-w-md -rotate-12">
            <div className="relative w-full p-6 h-[257px] text-center rotate-12 bg-gradient-to-br from-[#ffffff] via-[#719ae1] to-[#ffffff] rounded-lg shadow-md border-2 border-[#0050CB]">
              <h2 className="mb-2 text-2xl font-bold tracking-wider text-center sm:text-xl">CORPORATE SOLUTIONS</h2>
              <p className="mt-4 mb-4 text-sm text-center sm:text-base">Global immigration and corporate travel solutions for flawless travel management. Discover immigration solutions that unify your travel and mobility programs.</p>
              <a href="#" className="font-semibold text-white hover:underline">Learn More</a>
            </div>
          </div>
  
        </div>
      </div>
    );
  }