import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('@/views/index/index'),
    meta: {
      title: "硬核"
    }
  }
];

const router = new Router({ routes });

export default router;
