//import logo from './logo.svg';
import './App.css';
import Nav from './Componentes/Nav.js';
import Footer from './Componentes/Footer.js';
import { Routes, Route, Link } from "react-router-dom";
import Booking from './Componentes/Booking.js';
import Homepage from './Componentes/Homepage.js';
import ConfirmedBooking from './Componentes/ConfirmedBooking.js';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Booking" element={<Booking />}></Route>
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
