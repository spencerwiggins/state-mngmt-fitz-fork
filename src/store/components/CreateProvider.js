import React, { useState, Component } from "react";
import updateState from "../updateState";

const CreateProvider = (Provider, state, actions) => () => {
  const [_state, setState] = useState(state);
  console.log(_state);
  const _updateState = updateState(state, setState);

  const _actions = Object.entries(actions).reduce((acc, [fnName, fn]) => {
    acc[fnName] = () => _updateState(fn);
    return acc;
  }, {});

  return <Provider value={{ ..._state, ..._actions }}>test</Provider>;
};

// const createProvider = () => (Provider, state, actions, children) => {
//   console.log('here', state)
//   const [_state, setState] = useState(state);
//   const _updateState = updateState(state, setState);

//   const _actions = Object.entries(actions).reduce((acc, [fnName, fn]) => {
//     acc[fnName] = () => _updateState(fn);
//     return acc;
//   }, {});

//   return <Provider value={{ ..._state, ..._actions }}>{children}</Provider>;
// };

export default CreateProvider;
