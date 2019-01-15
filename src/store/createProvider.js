import React, { useState, createContext } from "react";
import updateState from "./updateState";

const Context = createContext();

const Provider = ({
  state: initialState,
  actions: initialActions,
  children
}) => {
  const [state, setState] = useState(initialState);
  const _updateState = updateState(state, setState);

  const actions = Object.entries(initialActions).reduce((acc, [fnName, fn]) => {
    acc[fnName] = () => _updateState(fn);
    return acc;
  }, {});

  return (
    <Context.Provider value={{ ...state, ...actions }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
