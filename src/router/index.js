import { createRouter, createWebHistory } from 'vue-router'
import {HomeView, Register , Login , ArticleDetail} from '@/views'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/article/:slug',
      name: 'article-detail',
      component: ArticleDetail
    }

  ]
})

export default router
