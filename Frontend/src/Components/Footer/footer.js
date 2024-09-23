import goo from './d.png'
export default function Footer(){


//   #f58d03 yellow

// #007fac blue
    return(

      
        <>
        
        
        <footer className="text-gray-700 bg-white border-t border-gray-200">
      <div className="container px-4 py-10 mx-auto md:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Contact Us */}
          <div>
            <h5 className="mb-4 font-bold text-2xl text-[#f58d03]">Contact Us</h5>
            <p className='text-[#007fac] font-semibold'>Toll-free customer care</p>
            <p className="mb-4 text-[#007fac]">+1 800 000 0000</p>
            <p className="mb-2 text-[#007fac] font-semibold">Need live support?</p>
            <a href="mailto:help@gotrip.com" className="text-blue-500">
              help@gotrip.com
            </a>
          </div>

          {/* Company */}
          <div>
            <h5 className="mb-4 font-bold text-2xl text-[#f58d03]">Company</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline  text-[#007fac]">About Us</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Blog</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Press</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">News</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Magazine</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="mb-4 font-bold text-2xl text-[#f58d03]">Support</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-[#007fac]">Contact</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Legal Notice</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Sitemap</a></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h5 className="mb-4 font-bold text-2xl text-[#f58d03]">Other Services</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-[#007fac]">Car Hire</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Activity Finder</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Tour List</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Flight Finder</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Cruise Ticket</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Holiday Rental</a></li>
              <li><a href="#" className="hover:underline text-[#007fac]">Travel Agents</a></li>
            </ul>
          </div>

          {/* Mobile */}
          <div>
            <h5 className="mb-4 font-bold text-2xl text-[#f58d03]">Mobile</h5>
            <div className="space-y-4">
              <img
                src={goo}
                alt="Google Play"
                className="w-36"
              />
           
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between pt-6 mt-10 border-t text-[#007fac] border-gray-200 md:flex-row">
          <p>© 2022 GoTrip LLC All rights reserved.</p>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <a href="#" className="hover:underline text-[#007fac]">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:underline text-[#007fac]">Terms</a>
            <span>•</span>
            <a href="#" className="hover:underline text-[#007fac]">Sitemap</a>
          </div>
          <div className="flex items-center mt-4 space-x-4 md:mt-0">
            <p>English (US)</p>
            <span>$ USD</span>
            {/* Placeholder social icons */}
            <div className="flex space-x-2">
              <a href="#" className=" hover:text-gray-700 text-[#007fac]">FB</a>
              <a href="#" className=" hover:text-gray-700 text-[#007fac]">TW</a>
              <a href="#" className=" hover:text-gray-700 text-[#007fac]">IG</a>
              <a href="#" className=" hover:text-gray-700 text-[#007fac]">LN</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
        
        
        
        
        
        
        
        
        </>
    )
}