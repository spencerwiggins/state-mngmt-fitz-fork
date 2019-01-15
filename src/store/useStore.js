import { useContext } from "react";

import { Context as CurrentUserContext } from "./CurrentUser";

const stores = {
  CurrentUser: CurrentUserContext
};

const useStore = storeName => {
  const store = stores[storeName];
  return useContext(store);
};

export default useStore;
