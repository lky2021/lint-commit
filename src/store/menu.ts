import { defineStore } from 'pinia'
import { publicRoutes } from '@/router/index.ts'
import { asyncRoutes } from '@/router/asyncRoutes.ts'
import { ref } from 'vue'
import type { MenuList } from './user.ts'
import type { RouteRecordRaw } from 'vue-router'

export const useMenuStore = defineStore(
  'menu',
  () => {
    const routers = ref<RouteRecordRaw[]>()
    const existRoutes = ref<RouteRecordRaw[]>([])

    const filterRoutes = (menus: MenuList[]) => {
      const routes: RouteRecordRaw[] = []
      // 路由权限匹配
      menus.forEach(({ id }) => {
        routes.push(...asyncRoutes.filter((item) => item.name === id))
      })

      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404',
      })

      routers.value = publicRoutes.map((item) => {
        if (item.path === '/') {
          return {
            ...item,
            children: [...routes],
          }
        } else {
          return item
        }
      })
      existRoutes.value = routes
      return routes
    }

    return {
      routers,
      existRoutes,
      filterRoutes,
    }
  },
  {
    persist: {
      pick: ['routers', 'existRoutes'],
    },
  }
)
