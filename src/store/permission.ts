import { publicRoutes, asyncRoutes } from '@/router/index.ts'
import { ref } from 'vue'
import type { MenuList } from './user.ts'
import type { RouteRecordRaw } from 'vue-router'

export const usePermissionStore = () => {
  const routers = ref<RouteRecordRaw[]>()

  const filterRoutes = (menus: MenuList[]) => {
    const routes: RouteRecordRaw[] = []
    // 路由权限匹配
    menus.forEach(({ id }) => {
      // 权限名 与 路由的 name 匹配
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
          children:
            item.children && item.children.length ? [...item.children, ...routes] : [...routes],
        }
      } else {
        return item
      }
    })
    return routes
  }

  return {
    routers,
    filterRoutes,
  }
}
