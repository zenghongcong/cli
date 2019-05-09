import Vue from "vue";
import { Toast } from "cube-ui";

Vue.use(Toast);

let toast = function(txt) {
  Toast.$create({
    txt,
    type: "txt"
  }).show();
};

export default { show: toast };
