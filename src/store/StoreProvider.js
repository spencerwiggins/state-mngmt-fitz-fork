import React from "react";
// import CountProvider from "./stores/Count";
// import MathProvider from "./stores/Math";

import createCountStore from "./stores/Count";

const { Context: CountContext, Provider: CountProvider } = createCountStore();

console.log("CountContext", CountContext);
const StoreProvider = ({ children }) => (
  <CountProvider>{children}</CountProvider>
);

export default StoreProvider;
