import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Error from '../views/Error.vue';
import Mangas from '../views/MangasList.vue';
import MangaPage from '../views/Manga.vue';

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
    path: '/mangas',
    name: 'Mangas',
    component: Mangas,
  },
  {
    path: '/manga/:id',
    name: 'Manga',
    component: MangaPage
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
