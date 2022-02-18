import React, {useState} from 'react'
import './timer.css';

export default function Timer() {
    const [clock, setClock] = useState("TIME?");
    let time = new Date().toLocaleTimeString();

    const getClock = ()=>{
        setClock(time);
    }

    const resetTime = () =>{
        setClock("TIME?");
    }

  return (
    <div className='container'>
        <h2 className='textClock'>{clock}</h2>
        <button onClick={getClock}>Get Time</button>
        <button onClick={resetTime}>Ç</button>

    </div>
  )
}
