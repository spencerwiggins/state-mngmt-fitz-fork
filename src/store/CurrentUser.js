import React, { useState, createContext } from "react";
import updateState from "./updateState";

const initialState = {
  currentUser: null
};

const Context = createContext(initialState);

const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const _updateState = updateState(state, setState);

  // Store actions should ONLY mutate the store... no side effects here.
  const actions = {
    setCurrentUser: user => {
      _updateState(draft => (draft.currentUser = user));
    },
    clearCurrentUser: () => {
      _updateState(draft => (draft.currentUser = null));
    }
  };

  return (
    <Context.Provider value={{ ...state, ...actions }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
