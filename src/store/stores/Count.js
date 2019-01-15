import React, { createContext } from "react";
import { Provider } from "../CreateProvider";
import { state, actions } from "./count";

let Context;
const CountProvider = ({ children }) => {
  Context = createContext(state);
  return (
    <Provider state={state} actions={actions} context={Context}>
      {children}
    </Provider>
  );
};

export default CountProvider;
export { Context };