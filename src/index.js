import React, { useContext } from "react";
import ReactDOM from "react-dom";

import CountProvider, { Context as CountContext } from "./store/Count";
import MathProvider, { Context as MathContext } from "./store/Math";

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
    <CountProvider>
      <MathProvider>
        <Counter />
        <Math />
      </MathProvider>
    </CountProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
