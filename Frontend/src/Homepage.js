

import My_Home from './Components/Landing_Page/HomePage/Home';
import InfoSection from './Components/Landing_Page/InfoPage/Info';
import Main_Slider from './Components/Landing_Page/Main_Slider/Main_Slider';
import Image_Component from './Components/Landing_Page/Image_Component/Image_Component';
import PopularSelections from './Components/Landing_Page/Slider_Cities/Popular_Cities';
import Res_Cards from './Components/Landing_Page/Responsive Cards/Responsive_Cards';
import TestimonialCarousel from './Components/Landing_Page/Customer_Review/Customer_Review';
import News from './Components/Landing_Page/News/News';
import Populars from './Components/Landing_Page/Popular_Destination/Populars';
import Newsletter from './Components/Landing_Page/Newsletter/Newsletter';
import Travel_Destinations from './Components/Landing_Page/Travel Destinations/Travel_Destinations';
import Services_Corner from './Components/Landing_Page/Services_Corner/Service_Corner';
import FAQs from './Components/Landing_Page/FAQs/FAQS';
import Discount_Banner from './Components/Landing_Page/Discount_Banner/Discount_Banner';
// import Footer from './Components/Footer/footer';
// import My_Header from './Components/Navbar/Header';
import { useEffect } from 'react';


export default function My_HomePage(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

return(
    <>
    <div className='overflow-x-hidden'>

    <My_Home/>
<InfoSection/>
 <Main_Slider/> 
 <Image_Component/> 
<PopularSelections/> 
 <Res_Cards/> 

<TestimonialCarousel/>

 <News/>

 <Populars/> 
 
 <br/>
 <Newsletter/> 


 </div>
    </>
)



}