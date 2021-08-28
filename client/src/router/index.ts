import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Error from '../views/Error.vue';
import Animes from '../views/Animes.vue';
import Anime from '../views/Anime.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Accueil',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: Error,
    meta: {
      title: 'Page introuvable',
    },
  },
  {
    path: '/animes',
    name: 'animes',
    component: Animes,
  },

  {
    path: '/animes/:title',
    name: 'anime',
    component: Anime,
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
