import React, { createContext } from "react";
import createProviderComponents from "./components/createProviderComponents";
import { UseStoreProvider } from "./components/UseStore";

const StoreProvider = ({ stores, children }) => {
  const comps = createProviderComponents(stores);

  const renderComponents = map => {
    const Component = map.reverse().reduce(
      (Accumulator, { component, props, context }, index) => {
        const LastComp = component;
        return () => (
          <LastComp
            state={props.state}
            actions={props.actions}
            context={context}
            content={index === 0 ? children : null}
          >
            <Accumulator />
          </LastComp>
        );
      },
      props => null
    );

    return <Component />;
  };

  return (
    <UseStoreProvider comps={comps}>{renderComponents(comps)}</UseStoreProvider>
  );
};

export default StoreProvider;
