const state = {
  currentUser: null
};

const actions = {
  setCurrentUser: (_, user) => ({
    currentUser: user
  }),
  clearCurrentUser: () => ({
    currentUser: null
  })
};

export { actions, state };
