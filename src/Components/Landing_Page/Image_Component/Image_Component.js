import { Link } from 'react-router-dom';

export default function Image_Component(){


    return(

        <>

        <div className='p-8 mt-20 bg-gray-100'>


            


        
<div className='w-full mt-4 text-center '>
<h2 className="pb-2 mt-12 text-4xl font-bold text-center">Explore the World Now</h2>
  <div class="w-[360px] h-1 mx-auto mt-2 mb-4 bg-blue-800"></div>

  <p className="text-lg text-center text-gray-600 ">Discover new destinations and cultures !</p>    
  </div>


<div class="relative flex flex-col mt-32   items-center mx-auto lg:flex-row-reverse  pb-12 lg:max-w-5xl lg:mt-24 xl:max-w-6xl ">




    {/* <div class="w-full h-64 lg:w-1/2  lg:h-auto">
        <img class="h-full w-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D" alt="Winding mountain road"/>
    </div> */}

<div className=" w-full h-64 lg:w-1/2  lg:h-auto sm:w-[70%] sm:h-[400px]"> 
  <video 
    className="object-cover w-full h-full rounded-2xl"
    src="https://pdftowebp.com/wp-content/uploads/mg2.mp4"
    autoPlay
    muted
    loop
  ></video>
</div>


    <div
        class="max-w-lg rounded-lg bg-white/40    md:max-w-xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-12 lg:-ml-12 xl:mt-16 xl:ml-4">
      
        <div class="flex flex-col p-8 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-blue-800 lg:text-4xl">Lets Explore the World </h2>
            <p class="mt-4 text-blue-800">
                Exploring the world now just a click away !!
            
            </p>
 
            <div class="mt-4">
                {/* <a href="#"
                    class="inline-block w-full text-center text-lg font-medium text-white bg-blue-500 border-solid border-2  py-2 px-6 rounded-lg hover:text-white hover:bg-blue-700   hover:shadow-md md:w-48">Read
                    More</a> */}
                        <Link to="/visa" className="inline-block w-full px-6 py-2 text-lg font-medium text-center text-white bg-blue-800 border-2 border-solid rounded-lg hover:text-white hover:bg-blue-600 hover:shadow-md md:w-48">
  Visa Options &#8250;
</Link>
            </div>
        </div>
   
    </div>
 

</div>





</div>
    </>
    )
}