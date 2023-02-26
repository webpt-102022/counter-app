import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(10);


  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  const handleDecrease = () => {
    setCounter(counter - 1)
  }

  const handleSecondIncrease = () => {
    setSecondCounter(secondCounter + 10)
  }

  const handleSecondDecrease = () => {
    setSecondCounter(secondCounter - 10)
  }

  return (
    <div className="counter">
      {console.log('Rendering')}
      <h1>Counter app</h1>
      <p>Count: {counter} | Second count: {secondCounter}</p>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
      <div>
        <button onClick={handleSecondIncrease}>Increase + 10</button>
        <button onClick={handleSecondDecrease}>Decrease - 10</button>
      </div>
    </div>
  )

}

export default Counter;