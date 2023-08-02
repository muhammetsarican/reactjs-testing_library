import React, {useState} from 'react'

function CounterApp() {
    const [counter, setCounter]=useState(0);
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increase</button>
        <button onClick={()=>setCounter(counter-1)}>Decrease</button>
    </div>
  )
}

export default CounterApp