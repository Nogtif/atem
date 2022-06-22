import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Error from '../views/Error.vue';
import Animes from '../views/AnimesList.vue';
import AnimePage from '../views/Anime.vue';

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
    name: 'Animes',
    component: Animes,
  },
  {
    path: '/animes/:id',
    name: 'Anime',
    component: AnimePage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Atem | ${to.meta.title || 'Accueil' }`;
  next();
});

export default router;
