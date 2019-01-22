import React from "react";
import composeActions from "../../core/helpers/composeActions";
import useStore from "../../core/store/useStore";
import LoginLogoutButton from "../../core/components/LoginLogoutButton";

const LoginLogoutButtonContainer = ({ actions }) => {
  const { currentUser, setCurrentUser, clearCurrentUser } = useStore("user");
  console.log("currentUser", currentUser);

  return (
    <LoginLogoutButton
      currentUser={currentUser}
      onLoginClick={composeActions([actions.login, setCurrentUser])}
      onLogoutClick={clearCurrentUser}
    />
  );
};

export default LoginLogoutButtonContainer;
