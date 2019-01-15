import React, { useState } from "react";
import updateState from "../updateState";

const Provider = ({
  state: initialState,
  actions: initialActions,
  context: Context,
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

export default Provider;
