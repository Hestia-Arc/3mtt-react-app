import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter === 0) return;

    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    if (counter === 10) return;

    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <div className="display">{counter}</div>
        <button onClick={handleIncrement}>+</button>
      </div>
      {counter === 0 && <p>You've reached the limit!</p>}
      {counter === 10 && <p>You've reached the maximum limit!</p>}
    </div>
  );
}

export default Counter;
