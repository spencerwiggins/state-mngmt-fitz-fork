import composePromise from "./composePromise";

const composeActions = fns => {
  return async () => {
    try {
      await composePromise(...fns)();
    } catch (e) {
      // do somethin...
    }
  };
};

export default composeActions;
