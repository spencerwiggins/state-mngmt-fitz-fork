import React from "react";

// Should move `store` to it's own root directory under client
import StoreProvider from "../core/store/StoreProvider";
import * as stores from "./stores";

import LoginLogoutButton from "./components/LoginLogoutButton";
import IdCard from "../feature/components/IdCard";
import Math from "./components/Math";
import Count from "./components/Count";
import loginActions from "./actions/loginActions";

function App() {
  return (
    <StoreProvider stores={stores}>
      <Math />
      <Count />
      <IdCard />
      <LoginLogoutButton actions={loginActions} />
    </StoreProvider>
  );
}

export default App;
