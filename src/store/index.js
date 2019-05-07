import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import modules from "./modules";

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: modules,
  state,
  mutations,
  actions
});

export default store;
