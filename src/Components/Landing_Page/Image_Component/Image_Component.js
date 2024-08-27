import { Link } from 'react-router-dom';
export default function Image_Component(){


    return(

        <>

        
      {/* <div className="w-full h-full">

<div 
  className="relative  bg-no-repeat xl:w-[70%] xl:p-12 xl:h-[230px] lgg:h-[130px] lg:h-[140px]  mt-8 sm:h-[150px] md:h-[180px] max-xxs:h-[140px]  w-[80%] mx-auto rounded-lg overflow-hidden shadow-lg"

 
 style={{ 
    backgroundImage: "url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }}
>
  <div className="absolute inset-0 bg-blue-500 bg-opacity-70"></div>
  <div className="relative flex flex-col items-center justify-between h-full p-4 sm:flex-row sm:p-6 md:p-8 lg:p-10">
    <h2 className="mb-4 lg:text-[27px]  lgg:text-[22px]   xl:text-[37px] font-bold  text-center text-white  sm:mb-0 sm:text-left">
      DO YOU KNOW WHERE YOU WANT TO GO?
    </h2>
    <button className="px-8 py-6 text-sm font-semibold text-black transition duration-300 bg-white rounded hover:bg-gray-100 xxs:text-base">
      LEAVE AN APPLICATION
    </button>
  </div>
</div>

</div> */}
    





<div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-24 xl:max-w-6xl ">

    <div class="w-full h-64 bg-green-200 lg:w-1/2  lg:h-auto">
        <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D" alt="Winding mountain road"/>
    </div>



    <div
        class="max-w-lg rounded-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
      
        <div class="flex flex-col p-8 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-blue-500 lg:text-4xl">Lets Explore the World </h2>
            <p class="mt-4">
                Exploring the world now just a click away !!
            
            </p>
 
            <div class="mt-4">
                {/* <a href="#"
                    class="inline-block w-full text-center text-lg font-medium text-white bg-blue-500 border-solid border-2  py-2 px-6 rounded-lg hover:text-white hover:bg-blue-700   hover:shadow-md md:w-48">Read
                    More</a> */}
                        <Link to="/visa" className="inline-block w-full px-6 py-2 text-lg font-medium text-center text-white bg-blue-500 border-2 border-solid rounded-lg hover:text-white hover:bg-blue-700 hover:shadow-md md:w-48">
  Visa Options &#8250;
</Link>
            </div>
        </div>
   
    </div>
 

</div>

    </>
    )
}