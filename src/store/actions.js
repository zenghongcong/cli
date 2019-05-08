let actions = {
  globalLoading({ state }, promise) {
    if (!state.globalLoadingTimer) {
      state.promiseObj.push(promise);
      setTimeout(() => {
        state.globalLoadingTimer = true;
        Promise.all(state.promiseObj)
          .then(() => {
            state.globalLoadingTimer = false;
            state.loading = false;
          })
          .catch(() => {
            state.globalLoadingTimer = false;
            state.loading = false;
          });
        state.promiseObj = [];
      }, 1000);
    }
  }
};

export default actions;
