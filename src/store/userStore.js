const state = {
  currentUser: null
};

const actions = {
  setCurrentUser: user => ({
    currentUser: user
  }),
  clearCurrentUser: () => ({
    currentUser: null
  })
};

export { actions, state };
