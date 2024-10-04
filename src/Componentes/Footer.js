import React, { useRef } from 'react';
import logo from "../assets/Logo.svg";

function Footer() {

    const modalizeRef = useRef(null);
        return (
           <footer ref={modalizeRef} id="pie">
            <img src={logo} alt="Logo" style={{margin: "20px 0px 0px 20px"}}/>
            <div ></div>
           </footer>
        )
    }
    
    export default Footer;