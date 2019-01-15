import React from "react";
import CountProvider from "./stores/Count";
import MathProvider from "./stores/Math";

const StoreProvider = ({ children }) => (
  <CountProvider>
    <MathProvider>{children}</MathProvider>
  </CountProvider>
);

export default StoreProvider;
