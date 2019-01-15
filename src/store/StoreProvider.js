import React from "react";
import {
  Provider as CreateProvider
  // Context as CreateContext
} from "./createProvider";

const StoreProvider = ({ stores, children }) => {
  console.log("stores", stores);
  const Providers = Object.entries(stores).map(([, obj]) => {
    const { state: storeState, actions: storeActions } = obj;

    return <CreateProvider state={storeState} actions={storeActions} />;
  });

  return Providers.map((item, i) => (
    <div key={i}>{React.createElement("div", [], children)}</div>
  ));

  // return <div>here</div>;
  // return Providers.map((X, i) => <div key={i}><X>{children}</X></div>);
};

export default StoreProvider;
