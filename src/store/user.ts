import { defineStore } from 'pinia'
import { ref } from 'vue'

const getUserData = () => {
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
  const userInfo = ref({})

  const getUserInfo = async () => {
    const res = (await getUserData()) as any
    userInfo.value = res
    return res
  }

  return {
    userInfo,
    getUserInfo,
  }
})
