import React, { useContext } from "react";
import ReactDOM from "react-dom";

import StoreProvider from "./store/StoreProvider";

import { Context as CountContext } from "./store/stores/Count";
import { Context as MathContext } from "./store/stores/Math";

const Counter = () => {
  const someContext = useContext(CountContext);
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
  const someContext = useContext(MathContext);
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
