import React from "react";
import CountProvider from "./components/Count";
import MathProvider from "./components/Math";
import UserProvider from "./components/User";

const StoreProvider = ({ children }) => (
  <UserProvider>
    <CountProvider>
      <MathProvider>{children}</MathProvider>
    </CountProvider>
  </UserProvider>
);

export default StoreProvider;
