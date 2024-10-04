import React, { useRef } from 'react';
import {Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
function Nav() {

    const modalizeRef = useRef(null);

     const estilos={display:"inline",
    }

    return (
       <nav ref={modalizeRef} id="navegacion">
        <img src={logo} alt="Logo" style={{margin: "20px 0px 0px 20px"}}/>
            <ul>
                
                <li><Link to="/" className="nav-item">Homepage</Link></li>
                <li> <Link to="/about" className="nav-item">Reservas</Link></li>
               
            </ul>

       </nav>
    )
}

export default Nav;