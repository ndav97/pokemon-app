import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/List.vue")
  },
  { path: "/:pathMatch(.*)*", component: () => import("../views/404.vue") }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  store.state.loading = true;
  setTimeout(() => {
    store.state.loading = false;
  }, 3000);
  next();
});

export default router;
