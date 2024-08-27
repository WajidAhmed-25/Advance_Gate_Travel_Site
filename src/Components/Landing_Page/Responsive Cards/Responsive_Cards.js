export default function Res_Cards(){


    return(
        <>


 <div className="flex flex-wrap justify-center gap-24 p-6 mt-32">
      {/* Card 1 */}
      <div className="w-full sm:w-[48%] lg:w-[40%] xl:w-[37%] 2xl:w-[30%] bg-white rounded-lg overflow-hidden shadow-lg">
        <div 
          className="relative bg-center bg-cover h-[460px]" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmV8ZW58MHx8MHx8fDA%3D')" }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black bg-opacity-50">
            <h2 className="text-2xl font-bold text-white">Things to do on your trip</h2>
            <button className="px-6 py-2 mt-4 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700">
              Experience
            </button>
          </div>
        </div>
      </div>
      
      {/* Card 2 */}
      <div className="w-full sm:w-[48%] lg:w-[40%] xl:w-[37%] 2xl:w-[30%] bg-white rounded-lg overflow-hidden shadow-lg">
        <div 
          className="relative h-[460px] bg-center bg-cover" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595279211419-88239fbff506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV8ZW58MHx8MHx8fDA%3D')" }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black bg-opacity-50">
            <h2 className="text-2xl font-bold text-white">Avail Early-bird Discount NOW</h2>
            <button className="px-6 py-2 mt-4 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div> 





        </>
    )
}