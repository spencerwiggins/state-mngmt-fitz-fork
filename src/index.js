import React from "react";
import ReactDOM from "react-dom";
import IdCard from "./components/IdCard";
import LoginLogoutButton from "./components/LoginLogoutButton";
import { Provider as CurrentUserProvider } from "./store/CurrentUser";

function AppContainer() {
  return (
    <CurrentUserProvider>
      <IdCard />
      <LoginLogoutButton />
    </CurrentUserProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
