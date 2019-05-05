let actions = {
  globalLoading({ state, commit }, promise) {
    if (!state.globalLoadingTimer) {
      state.promiseObj.push(promise);
      setTimeout(() => {
        state.globalLoadingTimer = true;
        Promise.all(state.promiseObj)
          .then(() => {
            state.globalLoadingTimer = false;
            commit("updateLoading", false);
          })
          .catch(() => {
            state.globalLoadingTimer = false;
            commit("updateLoading", false);
          });
        state.promiseObj = [];
      }, 1000);
    }
  }
};

export default actions;
