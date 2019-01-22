const state = {
  count: 1
};

const actions = {
  multiply: ({ count }, multiplier) => ({
    count: count * multiplier
  })
};

export { actions, state };
