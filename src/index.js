import React, { useContext } from "react";
import ReactDOM from "react-dom";

import StoreProvider from "./store/StoreProvider";
import useStore from "./store/useStore";

const Counter = () => {
  const someContext = useStore("count");
  const { count, increment, decrement } = someContext;

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

const Math = () => {
  const someContext = useStore("math");
  const { count, multiply } = someContext;

  return (
    <>
      <div>{count}</div>
      <button onClick={multiply}>*</button>
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
