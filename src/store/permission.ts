import { publicRoutes, asyncRoutes } from '@/router/index.ts'
import { ref } from 'vue'

export const usePermissionStore = () => {
  const routers = ref(publicRoutes)

  const filterRoutes = (menus) => {
    const routes = []
    // 路由权限匹配
    menus.forEach(({ id }) => {
      // 权限名 与 路由的 name 匹配
      routes.push(...asyncRoutes.filter((item) => item.name === id))
    })

    routes.push({
      path: '/:catchAll(.*)',
      redirect: '/404',
    })

    routers.value = [...publicRoutes, ...routes]
    return routes
  }

  return {
    routers,
    filterRoutes,
  }
}
