import goo from './d.png'
export default function Footer(){

    return(
        <>
        
        
        <footer className="text-gray-700 bg-white border-t border-gray-200">
      <div className="container px-4 py-10 mx-auto md:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Contact Us */}
          <div>
            <h5 className="mb-4 font-bold">Contact Us</h5>
            <p>Toll-free customer care</p>
            <p className="mb-4">+1 800 000 0000</p>
            <p className="mb-2">Need live support?</p>
            <a href="mailto:help@gotrip.com" className="text-blue-500">
              help@gotrip.com
            </a>
          </div>

          {/* Company */}
          <div>
            <h5 className="mb-4 font-bold">Company</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Magazine</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="mb-4 font-bold">Support</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Legal Notice</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h5 className="mb-4 font-bold">Other Services</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Car Hire</a></li>
              <li><a href="#" className="hover:underline">Activity Finder</a></li>
              <li><a href="#" className="hover:underline">Tour List</a></li>
              <li><a href="#" className="hover:underline">Flight Finder</a></li>
              <li><a href="#" className="hover:underline">Cruise Ticket</a></li>
              <li><a href="#" className="hover:underline">Holiday Rental</a></li>
              <li><a href="#" className="hover:underline">Travel Agents</a></li>
            </ul>
          </div>

          {/* Mobile */}
          <div>
            <h5 className="mb-4 font-bold">Mobile</h5>
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
        <div className="flex flex-col items-center justify-between pt-6 mt-10 border-t border-gray-200 md:flex-row">
          <p>© 2022 GoTrip LLC All rights reserved.</p>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>•</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
          <div className="flex items-center mt-4 space-x-4 md:mt-0">
            <p>English (US)</p>
            <span>$ USD</span>
            {/* Placeholder social icons */}
            <div className="flex space-x-2">
              <a href="#" className="text-gray-500 hover:text-gray-700">FB</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">TW</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">IG</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">LN</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
        
        
        
        
        
        
        
        
        </>
    )
}