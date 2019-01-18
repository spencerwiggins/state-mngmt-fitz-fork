import { createContext } from "react";
import CreateProviderComponent from "./CreateProviderComponent";
import * as stores from "../stores";

const createProviderComponents = stores => {
  const components = Object.entries(stores).map(
    ([name, { state, actions }]) => {
      const Context = createContext(state);
      return {
        component: CreateProviderComponent,
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

const all = createProviderComponents(stores);

export { all };
