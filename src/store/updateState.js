import produce from "immer";

const updateState = (state, setState) => fn =>
  setState(
    produce(state, draftState => {
      fn(draftState);
    })
  );

export default updateState;
