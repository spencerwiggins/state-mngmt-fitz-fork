import React from "react";
import useStore from "../store/useStore";
import { useLoginActions } from "../actions/loginActions";

const LoginLogoutButtonContainer = () => {
  const { currentUser } = useStore("CurrentUser");
  const { login, logout } = useLoginActions();

  return (
    <LoginLogoutButton
      currentUser={currentUser}
      onLoginClick={login}
      onLogoutClick={logout}
    />
  );
};

const LoginLogoutButton = ({ currentUser, onLogoutClick, onLoginClick }) => {
  if (currentUser) {
    return <button onClick={onLogoutClick}>Logout</button>;
  }

  return <button onClick={onLoginClick}>Login</button>;
};

export default LoginLogoutButtonContainer;
