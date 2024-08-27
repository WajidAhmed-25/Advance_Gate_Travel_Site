import Populars from "./Components/Landing_Page/Popular_Destination/Populars";
import PopularSelections from "./Components/Landing_Page/Slider_Cities/Popular_Cities";
import Contact from "./Components/Visa_Application/Contact_Us/Contact";
import Track_Visa from "./Components/Visa_Application/Tracking_App/Track";
import Visa_Application_Banner from "./Components/Visa_Application/Visa_App_Banner/Visa_App_Banner";
import Visa_Cards from "./Components/Visa_Page/Visa_Type_Cards/Visa_Cards";
import { useEffect } from "react";

export default function Visa_Application(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
        
        
        
        
        
     
        
        
        <Visa_Application_Banner/>

        <Visa_Cards/> 

        <Track_Visa/>

        <Contact/>

<Populars/>
        
        
        
        
        
        
        
        </>
    )
}