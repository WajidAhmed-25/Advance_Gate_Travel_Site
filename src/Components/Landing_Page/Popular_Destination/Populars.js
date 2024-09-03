
import { useState } from "react";
import React from "react";
import Travel_Destinations from "../Travel Destinations/Travel_Destinations";
import Discount_Banner from "../Discount_Banner/Discount_Banner";
import Services_Corner from "../Services_Corner/Service_Corner";
import FAQs from "../FAQs/FAQS";


function Populars() {


  
  return (
    <>




{/* <Travel_Destinations/>
<Discount_Banner/>

<Services_Corner/>

<FAQs/> */}

<Travel_Destinations/>
<div className="pt-8 pb-6 bg-white">
<Discount_Banner/>
</div>
<Services_Corner/>
<FAQs/>
    

    </>
  );
}

export default Populars;
