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
          { id: 'a', name: '/aa' },
          { id: 'b', name: '/bb' },
        ],
        btnList: ['a: add', 'a: upd', 'b: add', 'b: upd'],
      })
    }, 2000)
  })
}

export const useUserStore = defineStore('user', () => {
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
})
