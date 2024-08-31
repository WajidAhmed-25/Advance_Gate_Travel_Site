import pic from './women.png';
import { Link } from 'react-router-dom';

export default function Hero_Divs(){


    return(

        <>
        
        
        <div className="flex flex-col h-auto mt-16 md:flex-row">
      {/* Left Side Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src={pic}
          alt="Person at counter"
          className="object-cover w-full h-64 bg-center md:h-full"
        />
        {/* <div className="absolute px-10 py-4 text-sm font-semibold text-black bg-yellow-400 cursor-pointer hover:border-yellow-400 hover:border-2 hover:bg-black hover:text-yellow-400 bottom-4 left-4 md:bottom-10 md:left-10 md:text-lg">
          Apply Now &#8250;
        </div> */}
        <Link to="/visa_application" className="absolute px-10 py-4 text-sm font-semibold text-black bg-yellow-400 cursor-pointer hover:border-yellow-400 hover:border-2 hover:bg-black hover:text-yellow-400 bottom-4 left-4 md:bottom-10 md:left-10 md:text-lg">
  Apply Now &#8250;
</Link>
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col justify-center w-full p-6 text-white bg-blue-900 md:w-1/2 md:p-10">
        <h2 className="text-sm font-semibold md:text-lg">OUR PROMISE</h2>
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-8">
          WHAT WE STAND FOR
        </h1>

        <div className="mb-4 md:mb-8">
          <h3 className="mb-2 text-lg font-bold md:text-xl">PEOPLE + POSSIBILITIES</h3>
          <p className="text-sm leading-relaxed md:text-lg">
            We’re committed to addressing the issues impacting women, people of
            color, and everyone from diverse communities. We’re committed to
            addressing the issues impacting women, people of color, and everyone
            from diverse communities.
          </p>
        </div>

        <div className="mb-4 md:mb-8">
          <h3 className="mb-2 text-lg font-bold md:text-xl">100% POLICY ACCURACY</h3>
          <p className="text-sm leading-relaxed md:text-lg">
            We’re committed to addressing the issues impacting women, people of
            color, and everyone from diverse communities. We’re committed to
            addressing the issues impacting women, people of color, and everyone
            from diverse communities.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-bold md:text-xl">GLOBAL LEADER IN IMMIGRATION</h3>
          <p className="text-sm leading-relaxed md:text-lg">
            We’re committed to addressing the issues impacting women, people of
            color, and everyone from diverse communities. We’re committed to
            addressing the issues impacting women, people of color, and everyone
            from diverse communities.
          </p>
        </div>
      </div>
    </div>

{/* <section>
	<div class="bg-black text-white py-20">
		<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				<h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">TechFest</h1>
				<h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Space : The Timeless Infinity
				</h2>
				<p class="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
					register now to showcase your talent and win exciting prizes.</p>
				<a href="#"
					class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					Explore Now</a>
			</div>
			<div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div class="h-48 flex flex-wrap content-center">
					<div>
						<img class="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"/></div>
						<div>
							<img class="inline-block mt-24 md:mt-0 p-8 md:p-0"  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"/></div>
							<div>
								<img class="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"/></div>
							</div>
						</div>
					</div>
				</div>
</section> */}
        
        
        </>
    )
}