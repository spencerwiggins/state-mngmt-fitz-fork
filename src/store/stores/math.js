const state = {
  count: 1
};

const actions = {
  multiply: ({ count }) => ({ count: count * 2 })
};

export { actions, state };
