import React from "react";

import StoreProvider from "../core/store/StoreProvider";
import useStore from "../core/store/useStore";

import LoginLogoutButton from "../core/components/LoginLogoutButton";
import IdCard from "../feature/components/IdCard";
import loginActions from "./actions/loginActions";

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

function App() {
  return (
    <StoreProvider>
      <Counter />
      <Math />
      <IdCard />
      <LoginLogoutButton actions={loginActions} />
    </StoreProvider>
  );
}

export default App;
