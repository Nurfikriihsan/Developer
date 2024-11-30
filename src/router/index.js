import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
