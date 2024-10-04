import React, { useRef } from 'react';
import lemon from "../assets/lemon dessert.jpg";

function Main() {

    const modalizeRef = useRef(null);

    return (
       <main ref={modalizeRef} id="principal">
            <div className="cardd">
            <img className="fotoCard" src={lemon} alt="Logo" style={{margin: "10px 10px 10px 10px"}}/>
            <p>Pastel de trufa umm que rico </p>
            </div>
            <div className="cardd">
            <img className="fotoCard" src={lemon} alt="Logo" style={{margin: "10px 10px 10px 10px"}}/>
            <p>Pastel de trufa umm que rico </p>
            </div>
            <div className="cardd">
            <img className="fotoCard" src={lemon} alt="Logo" style={{margin: "10px 10px 10px 10px"}}/>
            <p>Pastel de trufa umm que rico </p>
            </div>

       </main>
    )
}

export default Main;