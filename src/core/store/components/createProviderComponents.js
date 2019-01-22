import { createContext } from "react";
import ProviderComponent from "./ProviderComponent";

const createProviderComponents = stores => {
  const components = Object.entries(stores).map(
    ([name, { state, actions }]) => {
      const Context = createContext(state);
      return {
        component: ProviderComponent,
        props: {
          state,
          actions
        },
        context: Context,
        name
      };
    }
  );

  return components;
};

export default createProviderComponents;
