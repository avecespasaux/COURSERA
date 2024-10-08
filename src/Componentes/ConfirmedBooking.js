import React, { useRef } from 'react';
import logo from "../assets/Logo.svg";

function ConfirmedBooking() {

    const modalizeRef = useRef(null);
        return (
           <div ref={modalizeRef} id="confirme">
            <img src={logo} alt="Logo" style={{margin: "20px 0px 0px 20px"}}/>
            Tu reserva se ha actualizado
           </div>
        )
    }
    
    export default ConfirmedBooking;