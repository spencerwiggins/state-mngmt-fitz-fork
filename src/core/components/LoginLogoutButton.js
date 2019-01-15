import React from "react";
import composeActions from "../helpers/composeActions";
import useStore from "../store/useStore";

const LoginLogoutButtonContainer = ({ actions }) => {
  const { currentUser, setCurrentUser, clearCurrentUser } = useStore("user");

  return (
    <LoginLogoutButton
      currentUser={currentUser}
      onLoginClick={composeActions([actions.login, setCurrentUser])}
      onLogoutClick={clearCurrentUser}
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
