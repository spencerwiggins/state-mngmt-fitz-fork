const fetchUser = async () => {
  const resp = await fetch("https://randomuser.me/api/").then(r => r.json());

  return resp.results[0];
};

const actions = {
  login: async () => {
    const user = await fetchUser();

    const data = {
      name: user.name.first
    };

    return data;
  },
  logout: () => {}
};

export default actions;
