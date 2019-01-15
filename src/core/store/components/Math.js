import React, { createContext } from "react";
import Provider from "./CreateProvider";
import { state, actions } from "../stores/math";

const Context = createContext();
const MathProvider = ({ children }) => {
  return (
    <Provider state={state} actions={actions} context={Context}>
      {children}
    </Provider>
  );
};

export default MathProvider;
export { Context };
