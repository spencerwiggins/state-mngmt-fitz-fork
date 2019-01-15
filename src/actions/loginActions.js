import { createContext, useContext } from "react";

import useStore from "../store/useStore";

const fetchUser = async () => {
  const resp = await fetch("https://randomuser.me/api/").then(r => r.json());

  return resp.results[0];
};

const factory = ({ currentUserStore }) => ({
  login: async () => {
    const user = await fetchUser();

    const data = {
      id: user.name.first,
      name: user.name.first,
      img: user.picture.medium
    };
    currentUserStore.setCurrentUser(data);
  },
  logout: () => {
    // do some work to clear the session
    currentUserStore.clearCurrentUser();
  }
});

const LoginActionsContext = createContext(() => {});

let _actions;

// Actions should do work and then operate on the store(s) handed to them.
const useLoginActions = () => {
  const currentUserStore = useStore("CurrentUser");
  const overrideActionsFactory = useContext(LoginActionsContext);

  if (_actions) {
    return _actions;
  }

  const actions = factory({ currentUserStore });

  _actions = {
    ...actions,
    ...overrideActionsFactory({ currentUserStore }, actions)
  };

  return _actions;
};

export default factory;
export { useLoginActions, LoginActionsContext };
