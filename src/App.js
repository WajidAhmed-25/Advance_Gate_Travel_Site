
import './App.css';
import My_Header from './Components/Navbar/Header';
import Footer from './Components/Footer/footer';
import My_HomePage from './Homepage';
import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Visa from './Visa';
import Visa_Application from './Visa_Application';
import Main_Slider from './Components/Landing_Page/Main_Slider/Main_Slider';
import Travel_Reg_Form from './Components/Travel_Form/Travel_Reg_Form';



function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="App">


<Router>
  <My_Header/> 
      <Routes>
        <Route path="/" element={ <My_HomePage/>} />
        <Route path="/visa" element={ <Visa/>} />
        <Route path="/visa_application" element={ <Visa_Application/>} />
        <Route path="/application_form" element={<Travel_Reg_Form/>}/>
        
      </Routes>
      <Footer/>
    </Router>





    </div>
  );
}

export default App;
