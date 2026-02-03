import { defineStore } from 'pinia'
import { ref } from 'vue'

interface UserInfo {
  roleList: RoleList[]
  menuList: MenuList[]
  btnList: string[]
}

export interface MenuList {
  id: string
  name: string
}

interface RoleList {
  id: number
  name: string
}

const getUserData = (): Promise<UserInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        roleList: [{ id: 1, name: '超级管理员' }],
        menuList: [
          { id: 'home', name: '/home' },
          { id: 'about', name: '/about' },
        ],
        btnList: ['home: add', 'home: upd', 'about: add', 'about: upd'],
      })
    }, 2000)
  })
}

export const useUserStore = defineStore(
  'userStore',
  () => {
    const userInfo = ref<null | UserInfo>(null)
    const token = ref<string>('')

    const getUserInfo = async () => {
      const res = await getUserData()
      userInfo.value = res
      return res
    }

    const setToken = (str: string) => {
      token.value = str
    }

    return {
      userInfo,
      token,
      getUserInfo,
      setToken,
    }
  },
  {
    persist: true,
  }
)
