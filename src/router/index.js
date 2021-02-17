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
