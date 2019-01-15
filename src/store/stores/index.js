import { state as countState, actions as countActions } from "./count";
import { state as mathState, actions as mathActions } from "./math";
const stores = {
  count: {
    state: countState,
    actions: countActions
  },
  math: {
    state: mathState,
    actions: mathActions
  }
};

export default stores;
