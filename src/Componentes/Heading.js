import React, { useRef } from 'react';
import fotoCabecera from '../assets/restaurant.jpg';
import Button from 'react-bootstrap/Button';
function Heading() {


   const modalizeRef = useRef(null);
   /* const estilos={border:"1px solid black",
        width:"100%",
        height:"100px",
    }*/

    return (
       <header  id="cabecera" ref={modalizeRef}>
         <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>hehehehehehehehehehheheheehehehhehehe</p>
            <Button variant="outline-primary">RESERVA</Button>
         </div>
         <div>
          <img src={fotoCabecera} alt="Logo" style={{width:'200px',height:'200px'}}/>
         </div>
           
            
       </header>
    )
}

export default Heading;