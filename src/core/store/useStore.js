import { useContext } from "react";

import * as comps from "./components";

const allComps = comps.all;

const stores = allComps.reduce((acc, { name, context }) => {
  acc[name] = context;

  return acc;
}, {});

const useStore = storeName => {
  const store = stores[storeName];
  return useContext(store);
};

export default useStore;
