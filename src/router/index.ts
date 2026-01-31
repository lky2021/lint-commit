import { createWebHistory, createRouter } from 'vue-router'

import Login from '@/pages/login/index.vue'
import Home from '@/pages/home/index.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
