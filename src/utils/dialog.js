import Vue from "vue";
import { Dialog } from "cube-ui";

Vue.use(Dialog);

let dialog = function(options) {
  return Dialog.$create(options).show();
};

export default { show: dialog };
