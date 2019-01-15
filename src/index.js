import React, { useContext } from "react";
import ReactDOM from "react-dom";

import StoreProvider from "./store/StoreProvider";
import useStore from "./store/useStore";

// import { Context as CountContext } from "./store/stores/Count";
// import { Context as MathContext } from "./store/stores/Math";

const Counter = () => {
  const someContext = useStore("count");
  // console.log("countContext", someContext);
  const { count, increment, decrement } = someContext;

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

// const Math = () => {
//   const someContext = useStore("math");
//   const { count, multiply } = someContext;

//   return (
//     <>
//       <div>{count}</div>
//       <button onClick={multiply}>*</button>
//     </>
//   );
// };

function AppContainer() {
  return <StoreProvider>hello</StoreProvider>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
