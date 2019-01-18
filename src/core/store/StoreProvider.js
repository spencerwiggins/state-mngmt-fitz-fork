import React from "react";
import CountProvider from "./components/Count";
import MathProvider from "./components/Math";
import UserProvider from "./components/User";

// TODO: Dynamically create each Provider based stores:
// https://codesandbox.io/s/pj5v338nk7
const StoreProvider = ({ children }) => (
  <UserProvider>
    <CountProvider>
      <MathProvider>{children}</MathProvider>
    </CountProvider>
  </UserProvider>
);

export default StoreProvider;
