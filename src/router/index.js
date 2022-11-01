import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Searchtab from "../components/Searchtab.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),

    component: Searchtab,
    // children: [
    //   {
    //     path: "liu_1",
    //     component: Liu_1,
    //   },
    // ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
