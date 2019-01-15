import React from "react";
import ReactDOM from "react-dom";

import StoreProvider from "./store/StoreProvider";
import useStore from "./store/useStore";

const Counter = () => {
  const { count, increment, decrement } = useStore("count");

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

const Math = () => {
  const { count, multiply } = useStore("math");

  return (
    <>
      <div>{count}</div>
      <button onClick={() => multiply(10)}>*</button>
    </>
  );
};

function AppContainer() {
  return (
    <StoreProvider>
      <Counter />
      <Math />
    </StoreProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
