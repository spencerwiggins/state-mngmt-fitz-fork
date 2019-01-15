import React from "react";
import CountProvider from "./components/Count";
import MathProvider from "./components/Math";

const StoreProvider = ({ children }) => (
  <CountProvider>
    <MathProvider>{children}</MathProvider>
  </CountProvider>
);

export default StoreProvider;
