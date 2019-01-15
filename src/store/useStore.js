import { useContext } from "react";

import { Context as CountContext } from "./components/Count";
import { Context as MathContext } from "./components/Math";

const stores = {
  count: CountContext,
  math: MathContext
};

const useStore = storeName => {
  const store = stores[storeName];
  return useContext(store);
};

export default useStore;
