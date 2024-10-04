import React, { useRef } from 'react';
import Heading from './Heading.js';
import Main from './Main.js';


function Homepage() {

    const modalizeRef = useRef(null);
        return (
           <div ref={modalizeRef}>
            
            <Heading/>
            <Main/>
           </div>
        )
    }
    
    export default Homepage;