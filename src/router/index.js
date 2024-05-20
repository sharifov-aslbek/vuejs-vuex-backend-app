import { createRouter, createWebHistory } from 'vue-router'
import {HomeView, Register , Login , ArticleDetail , CreateArticle , EditArticle} from '@/views'
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
    },
    {
      path: '/create-article',
      name: 'create-article',
      component: CreateArticle
    },
    {
      path: '/edit-article/:slug',
      name: 'edit-article',
      component: EditArticle
    },
    
  ]
})

export default router
