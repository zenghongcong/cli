import Vue from "vue";
import router from "@/router";
import store from "@/store";
import "@/cube-ui.js";
import { bridge, rem, ajax, toast, dialog, delay } from "@/utils";
import "@/App.styl";
import App from "@/App.vue";

Vue.config.productionTip = false;

if (process.globalConfig.vConsole) {
  let vconsole = require("vconsole");
  new vconsole();
}

if (process.globalConfig.uweb) {
  require("@/uweb");
}

rem.init();
Vue.prototype.$toast = toast.show;
Vue.prototype.$dialog = dialog.show;
Vue.prototype.$delay = delay;
Vue.mixin(bridge);
Vue.mixin(ajax);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
