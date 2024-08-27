

import Populars from "./Components/Landing_Page/Popular_Destination/Populars";
import Cards_Visa from "./Components/Visa_Page/Cards_Visa/Cards_Visa";
import Hero_Divs from "./Components/Visa_Page/Hero_Div/Hero_Div";
import Hex_Cards from "./Components/Visa_Page/Hex_Cards/Hex_Cards";
import My_Banner from "./Components/Visa_Page/Start_Banner/Banner";
import Visa_Cards from "./Components/Visa_Page/Visa_Type_Cards/Visa_Cards";
import { useEffect } from "react";

export default function Visa(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

return(
    <>
    <div className="overflow-x-hidden">

    <My_Banner/> 

 <Visa_Cards/>

<Hero_Divs/>

<Hex_Cards/>

<Cards_Visa/>

<Populars/>

</div>



    </>
)
}