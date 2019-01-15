import React, { createContext } from "react";
import createProvider from "../components/CreateProvider";
import { state, actions } from "./count";

const createCountStore = () => {
  const Context = createContext(state);
  const Provider = createProvider(Context.Provider, state, actions);

  return {
    Provider,
    Context
  };
};

export default createCountStore;

// let Context;
// const CountProvider = ({ children }) => {
//   Context = createContext(state);
//   return (
//     <Provider state={state} actions={actions} context={Context}>
//       {children}
//     </Provider>
//   );
// };

// export default CountProvider;
// export { Context };
