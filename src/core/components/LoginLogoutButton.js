import React from "react";

const LoginLogoutButton = ({ currentUser, onLogoutClick, onLoginClick }) => {
  if (currentUser) {
    return <button onClick={onLogoutClick}>Logout</button>;
  }

  return <button onClick={onLoginClick}>Login</button>;
};

export default LoginLogoutButton;
