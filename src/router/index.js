import Vue from "vue";
import Router from "vue-router";

//优先加载
import index from "@/views/index/index";

//懒加载
// const other = () => import('./views/other/index');

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    meta: {
      title: "硬核"
    }
  }
];

const router = new Router({ routes });

export default router;
