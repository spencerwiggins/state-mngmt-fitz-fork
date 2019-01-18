import React from "react";
import * as comps from "./components";

const StoreProvider = ({ children }) => {
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

  return renderComponents(comps.all);
};

export default StoreProvider;
