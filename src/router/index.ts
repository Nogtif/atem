import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(`../views/Home/Home`),
      meta: {
        title: 'Accueil',
      },
    },
    {
      path: '/:id',
      name: 'Anime',
      component: () => import(`../views/Anime/Anime`),
    },
    {
      path: '/:catchAll(.*)',
      name: 'Error',
      component: () => import(`../views/Error/Error`),
      meta: {
        title: 'Page introuvable',
      },
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = `Atem | ${to.meta.title || 'Accueil' }`;
  next();
});

export default router;
