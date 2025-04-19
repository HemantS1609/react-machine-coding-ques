import React, { useReducer } from "react";
import "./Counter.css";
const initialState = 0;

const reducerFun = (state, action) => {
  switch (action.type) {
    case "increment":
      return Math.min(state + 1, 10);
    case "decrement":
      return Math.max(state - 1, 0);
    case "reset":
      return 0;

    default:
      state;
  }
};
const Counter = () => {
  const [count, dispatch] = useReducer(reducerFun, initialState);

  // const increment = () => setCount((prev) => Math.min(prev + 1, 10));
  // const decrement = () => setCount((prev) => Math.max(prev - 1, 0));
  // const reset = () => setCount(0);
  return (
    <div className="child-component-container">
      <div className="counter-container">
        <h2>{count}</h2>
        <div className="button-block">
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
