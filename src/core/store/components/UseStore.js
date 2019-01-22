import React, { createContext } from "react";

const Context = createContext({ comps: null });
const { Provider } = Context;

const UseStoreProvider = ({ children, comps }) => (
  <Provider value={comps}>{children}</Provider>
);

export default Context;
export { UseStoreProvider };
