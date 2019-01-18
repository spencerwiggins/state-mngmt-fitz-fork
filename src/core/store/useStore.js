import { useContext } from "react";

import { Context as CountContext } from "./components/Count";
import { Context as MathContext } from "./components/Math";
import { Context as UserContext } from "./components/User";

// TODO: Dynamically create these
const stores = {
  count: CountContext,
  math: MathContext,
  user: UserContext
};

const useStore = storeName => {
  const store = stores[storeName];
  return useContext(store);
};

export default useStore;
