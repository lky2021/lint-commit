import type { RouteRecordRaw } from 'vue-router'

const homeRoute: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    meta: {
      title: '我是home',
    },
  },
]

export default homeRoute
