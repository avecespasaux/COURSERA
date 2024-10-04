import React, { useRef } from 'react';

function Booking() {

    const modalizeRef = useRef(null);
        return (
           <div ref={modalizeRef}>
            Pagina de reservas
            <div ></div>
           </div>
        )
    }
    
    export default Booking;