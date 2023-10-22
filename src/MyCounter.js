import React, { useState } from "react";
import UseCustomCounter from "./UseCustomCounter";
import "./index.css";
import * as Icon from "react-feather";
// import { Link } from 'react-router-dom'
// import { ErrorBoundary } from "react-error-boundary";


const MyCounter = () => {
  const { count, increment, decrement, reset, setValue } = UseCustomCounter();

  const [inputValue, setInputValue] = useState("");

  const [hasError, setHasError] = useState(false);


  function handleOnChange(e) {
    e.preventDefault();
    setInputValue(e.target.value);
    // e.target.value = inputValue
  }

  
    if(hasError) {
    throw new Error("Please try again");

    }
  

  function updateCount(e) {
    setValue(inputValue);
    setInputValue("");
    e.preventDefault();

    if (inputValue === "") {
      alert("Please enter a number");
      setValue(0);
    }
  }

  return (
    <div className="counter-container">
    <h1>Counter</h1> 
  <h1 className="count-value">{count}</h1>
  <div className="button-container">
    <button onClick={decrement}> <Icon.ChevronDown/> </button>
    <button onClick={reset}><Icon.RotateCcw/> </button>
    <button onClick={increment}> <Icon.ChevronUp/> </button>    
  </div>
  <input type="number" placeholder="input starting number" value={inputValue} onChange={handleOnChange} />
  <button onClick={updateCount}>Set start</button>
  <button onClick={() => setHasError(true)}>Trigger error</button>
</div>
  );
};

export default MyCounter;
