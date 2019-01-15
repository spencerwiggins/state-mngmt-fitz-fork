import React, { useContext } from "react";
import ReactDOM from "react-dom";

import {
  Provider as CountProvider,
  Context as CountContext
} from "./store/createProvider";
import { state, actions } from "./store/countStore";

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

function AppContainer() {
  return (
    <CountProvider state={state} actions={actions}>
      <Counter />
    </CountProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
