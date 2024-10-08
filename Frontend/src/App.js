import "./App.css";
import My_Header from "./Components/Navbar/Header";
import Footer from "./Components/Footer/footer";
import My_HomePage from "./Homepage";
import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Visa from "./Visa";
import Visa_Application from "./Visa_Application";
import Main_Slider from "./Components/Landing_Page/Main_Slider/Main_Slider";
import Travel_Reg_Form from "./Components/Travel_Form/Travel_Reg_Form";
import Price from "./Components/Pricing_Cards/Price";

import Canada from "./Components/Countries/Canada";
import Australia from "./Components/Countries/Australia";
import UK from "./Components/Countries/Uk";
import USA from "./Components/Countries/USA";
import Turkey_Visa from "./Components/Countries/Turkey";
import Schengen_Visa from "./Components/Countries/Schengen";
import Travel_Blogs from "./Components/Blogs/Blog";
import Travel_Contact from "./Components/Contact Us/Contact";
import Assistance_Btn from "./Components/Chat_Button/Assistance";
import Admin_Login from "./Components/Admin_Login/Admin_Login";
import Admin_Dashboard from "./Components/Admin_Dashboard/Admin_Dashboard";
import Query from "./Components/Query_Form/Query";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   #f58d03 yellow

  // #007fac blue

  return (
    <div className="App">
      <Router>
        <My_Header />
        <Routes>
          <Route path="/" element={<My_HomePage />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/visa_application" element={<Visa_Application />} />
          <Route path="/application_form" element={<Travel_Reg_Form />} />
          <Route path="/Canada_visa" element={<Canada />} />
          <Route path="/Uk_visa" element={<UK />} />
          <Route path="/Australia_visa" element={<Australia />} />
          <Route path="/USA_visa" element={<USA />} />
          <Route path="/Turkey_visa" element={<Turkey_Visa />} />
          <Route path="/Shengion_visa" element={<Schengen_Visa />} />
          <Route path="/Travel_Blogs" element={<Travel_Blogs />} />
          <Route path="/Contact_Us" element={<Travel_Contact />} />
          <Route path="/Admin_Login" element={<Admin_Login />} />
          <Route path="/Admin_Dashboard" element={<Admin_Dashboard />} />
          <Route path="/query_form" element={<Query />} />
        </Routes>

        <Assistance_Btn />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
