import React, { createContext } from "react";
import Provider from "./CreateProvider";
import { state, actions } from "../stores/count";

const Context = createContext(state);
const CountProvider = ({ children }) => {
  return (
    <Provider state={state} actions={actions} context={Context}>
      {children}
    </Provider>
  );
};

export default CountProvider;
export { Context };
