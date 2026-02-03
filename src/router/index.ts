import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/404',
    component: () => import('@/pages/error-page/404.vue'),
  },
  {
    path: '/401',
    component: () => import('@/pages/error-page/401.vue'),
  },
  {
    path: '/',
    component: () => import('@/pages/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '我是layout',
    },
    children: [],
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: publicRoutes,
})
