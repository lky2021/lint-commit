import { createWebHistory, createRouter } from 'vue-router'
import UserManageRouter from './modules/user.ts'

export const asyncRoutes = [UserManageRouter]

export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/',
    component: () => import('@/pages/layout/index.vue'),
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('@/pages/error-page/404.vue'),
      },
      {
        path: '401',
        name: '401',
        component: () => import('@/pages/error-page/401.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: publicRoutes,
})
