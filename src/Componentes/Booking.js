import React, { useRef } from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from './ConfirmedBooking.js';

function Booking() {
    const [dataBooking, setDataBooking] = useState("");
     const [time, setTime] = useState("");
  const [numero, setNumero] = useState("");
  const [ocasion, setOcasion] = useState("");
  const modalizeRef = useRef(null);
  const navigate = useNavigate();




  const GetIsFormValid = (e) => {
    e.preventDefault(); 
    useEffect(() => {
       navigate("/ConfirmedBooking")
        
      })
     // submitAPI();
     
     

    
  };

  const initializeTimes = [
    {id: 0, text: '08:00'},
  ];

  function updateTimes (){
        setTime();

  }

  useEffect(() => {
    //fetchAPI(date);
  });

  //const [state, dispatch] = useReducer(reducer,initializeTimes);

  //dispatch({ type: 'cambio' });

  /*function reducer(state, action) {
    if (action.type === 'cambio') {
      return {
        age: state.age + 1
      };
    }
    throw Error('Unknown action.');
  }*/


        return (
           <div ref={modalizeRef}>
<form style={{display: 'grid', maxWidth: '200px', gap: '20px',margin: 'auto'}}>
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date" value ={dataBooking} onChange ={e=>setDataBooking(e.target.value)}/>
   <label for="res-time">Choose time</label>
   <select id="res-time " value ={time}>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" value ={numero} onChange ={e=>setNumero(e.target.value)}/>
   <label for="occasion">Occasion</label>
   <select id="occasion" value ={ocasion} onChange ={e=>setOcasion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" /*disabled={!GetIsFormValid()}*/ onClick={GetIsFormValid}/>
</form>
           </div>
        )
    }
    
    export default Booking;