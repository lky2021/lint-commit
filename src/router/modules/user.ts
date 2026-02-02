import type { RouteRecordRaw } from 'vue-router'

const userRoute: RouteRecordRaw = {
  path: '/user',
  component: () => import('@/pages/layout/index.vue'),
  redirect: '/user/role',
  name: 'a',
  meta: {
    title: 'user',
    icon: 'personnel',
  },
  children: [],
}

export default userRoute
