import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Error from "../views/Error.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
