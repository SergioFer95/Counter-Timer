import React, { useState } from 'react'
import './counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);


  const decrease = () => {
    setCount(count - 1);
    // Lo siguiente es para impedir que aparezcan números negativos. Pausamos el decrease en 0, más para atrás ya no podemos.
    if (count <= 0) {
      setCount(0);
    }
  }

  const increase = () => {
    setCount(count + 1);
  }
  
  const reset = () =>{
    setCount(0);
  }

  const increase5 = () =>{
    setCount(count +5);
  }

  return (
    <div className='container'>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={reset}>Ç</button>
      <button onClick={decrease}>-</button>
      <button onClick={increase5}>+5</button>
    </div>
  )
}
