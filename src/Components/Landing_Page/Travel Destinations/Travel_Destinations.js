
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Travel_Destinations(){



    return(



        <div className="mt-32 mb-20">
        <h2 class="text-4xl font-bold text-center mb-4 mt-4 transition-transform duration-500 transform hover:scale-105 cursor-default">
Travel Destinations
</h2>
<div class="w-[280px] h-1 mx-auto mt-2 mb-4 bg-blue-800"></div>
<p className="text-xl text-center text-gray-500">Discover unforgettable experiences worldwide</p>




<div class="flex flex-wrap lg:w-[75%] sm:mx-auto  sm:mb-2 mx-8 p-4  mt-8 mb-8">

<div class="p-2 sm:w-1/2  mt-4 w-full ">


<div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
<FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-blue-900'/>
<span class="font-medium text-xl">Switzerland</span>
</div>
</div>



<div class="p-2 sm:w-1/2 w-full mt-4">
<div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
<FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-blue-900'/>
<span class="font-medium text-xl">Turkey</span>
</div>
</div>



<div class="p-2 sm:w-1/2 w-full mt-4">
<div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
<FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-blue-900'/>
<span class="font-medium text-xl">UK</span>
</div>
</div>


<div class="p-2 sm:w-1/2 w-full mt-4">
<div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
<FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-blue-900'/>
<span class="font-medium text-xl">Finland</span>
</div>
</div>


<div class="p-2 sm:w-1/2 w-full mt-4">
<div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
<FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-blue-900'/>
<span class="font-medium text-xl">Europe</span>
</div>
</div>



<div class="p-2 sm:w-1/2 w-full mt-4">
<div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
<FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-blue-900'/>
<span class="font-medium text-xl">North America</span>
</div>
</div>


<div class="p-2 sm:w-1/2 w-full mt-4">
<div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
<FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-blue-900'/>
<span class="font-medium text-xl">America</span>
</div>
</div>



<div class="p-2 sm:w-1/2 w-full mt-4">
<div class="bg-gray-100 border-blue-900/40 border-2 rounded flex p-4 h-full items-center">
<FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 mr-6 text-blue-900'/>
<span class="font-medium text-xl">Australia</span>
</div>
</div>
</div>
</div>

    )
}