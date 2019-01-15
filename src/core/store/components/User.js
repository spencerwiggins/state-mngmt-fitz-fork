import React, { createContext } from "react";
import Provider from "./CreateProvider";
import { state, actions } from "../stores/user";

const Context = createContext(state);
const UserProvider = ({ children }) => {
  return (
    <Provider state={state} actions={actions} context={Context}>
      {children}
    </Provider>
  );
};

export default UserProvider;
export { Context };
