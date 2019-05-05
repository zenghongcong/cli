let user = {
  namespaced: true,
  state: {
    name: ""
  },
  mutations: {
    updateName(state, name) {
      state.name = name;
    }
  },
  actions: {},
  getters: {}
};

export default user;
