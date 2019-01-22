import React from "react";
import useStore from "../../core/store/useStore";

const Count = () => {
  const { count, increment, decrement } = useStore("count");

  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Count;
