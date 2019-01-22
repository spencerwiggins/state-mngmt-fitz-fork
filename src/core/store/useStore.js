import { useContext } from "react";

import UseStoreContext from "./components/UseStore";

const _stores = comps =>
  comps.reduce((acc, { name, context }) => {
    acc[name] = context;

    return acc;
  }, {});

const useStore = storeName => {
  const storeContext = useContext(UseStoreContext);
  const stores = _stores(storeContext);
  const store = stores[storeName];
  return useContext(store);
};

export default useStore;
