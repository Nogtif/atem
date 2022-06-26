import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home';
import Error from '../views/Error/Error';

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = `Atem | ${to.meta.title || 'Accueil' }`;
  next();
});

export default router;
