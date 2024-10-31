import logo from './logo.svg';
import './App.css';

import React, {useState} from "react"

function App() {
  const [count, setCount]=useState(0)
  function increaseCounterFun(){
    setCount(count+1)
  }
  function descreaseCounterFun(){
    setCount(count-1)
  }

  return (
    <div style={{marginLeft:'10px'}}>
      <h3>Counter</h3>
      <p>{count}</p>
      <p><button onClick={increaseCounterFun}>+</button> <button onClick={descreaseCounterFun}>-</button></p>
    </div>
  );
}

export default App;
