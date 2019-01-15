import { useContext } from "react";

import { Context as CountContext } from "./stores/Count";
import { Context as MathContext } from "./stores/Math";
const stores = {
  count: CountContext,
  math: MathContext
};

const useStore = storeName => {
  const store = stores[storeName];
  return useContext(store);
};

export default useStore;
