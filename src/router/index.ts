import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import { updateLocale } from './updateLocale'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPageView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach(({ query }, from, next) => {
  const langFromQuery = query.lang
  if (langFromQuery) {
    const value = Array.isArray(langFromQuery) ? langFromQuery.pop() : langFromQuery
    value && updateLocale(value)
  }

  next()
})

export default router
