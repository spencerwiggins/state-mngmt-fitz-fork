const state = {
  count: 0
};

const actions = {
  increment: ({ count }) => ({ count: count + 1 }),
  decrement: ({ count }) => ({ count: count - 1 })
};

export { actions, state };
