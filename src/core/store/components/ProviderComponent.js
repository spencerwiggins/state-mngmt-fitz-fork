import React from "react";
import Provider from "./Provider";

const ProviderComponent = ({
  state,
  actions,
  children,
  content,
  context: Context
}) => (
  <Provider state={state} actions={actions} context={Context}>
    {content || children}
  </Provider>
);

export default ProviderComponent;
