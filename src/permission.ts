import { router } from '@/router/index.ts'
import { useUserStore } from '@/store/user.ts'
import { useMenuStore } from '@/store/menu'

const whiteList = ['/login']

let hasDynamicRoutes = false

router.beforeEach(async (to, from, next) => {
  const menuStore = useMenuStore()
  const userStore = useUserStore()

  if (userStore.token) {
    if (to.path === '/login') {
      next()
    } else {
      //这里逻辑是正确的
      if (!userStore.userInfo) {
        const { menuList } = await userStore.getUserInfo()
        const filterRoutes = menuStore.filterRoutes(menuList)
        filterRoutes.forEach((item) => {
          router.addRoute('layout', item)
        })
        hasDynamicRoutes = true
        return next(to.path)
      } else if (!hasDynamicRoutes) {
        const filterRoutes = menuStore.filterRoutes(userStore.userInfo.menuList)
        filterRoutes.forEach((item) => {
          router.addRoute('layout', item)
        })
        hasDynamicRoutes = true
        return next({ ...to })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
