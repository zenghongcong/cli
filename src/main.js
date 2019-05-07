import Vue from "vue";
import router from "@/router";
import store from "@/store";
import { bridge, rem, ajax, regex } from "@/utils";
import App from "@/App.vue";
import "@/cube-ui.js";
import "@/App.styl";

Vue.config.productionTip = false;

if (process.globalConfig.vConsole) {
  let vconsole = require("vconsole");
  new vconsole();
}

if (process.globalConfig.uweb) {
  require("@/uweb");
}

rem.init();
Vue.mixin(bridge);
Vue.mixin(ajax);
Vue.mixin(regex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
