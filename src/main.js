import Vue from "vue";
import router from "@/router/index";
import store from "@/store/index";
import bridge from "@/utils/bridge";
import rem from "@/utils/rem";
import ajax from "@/utils/ajax";
import regex from "@/utils/regex";
import App from "@/App.vue";
import "@/cube-ui.js";

Vue.config.productionTip = false;

if (process.globalConfig.vConsole) {
  let vconsole = require("vconsole");
  new vconsole();
}

if (process.globalConfig.uweb) {
  require("@/utils/uweb");
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
