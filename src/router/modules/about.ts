import type { RouteRecordRaw } from 'vue-router'

const aboutRoute: RouteRecordRaw[] = [
  {
    path: '/about',
    component: () => import('@/views/about/index.vue'),
    name: 'about',
    meta: {
      title: '我是about',
    },
  },
]

export default aboutRoute
