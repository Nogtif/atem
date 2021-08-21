import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Error from "../views/Error.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Accueil",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: Error,
    meta: {
      title: "Page introuvable",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Atem | ${to.meta.title}`;
  next();
});

export default router;
