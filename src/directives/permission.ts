import { useUserStore } from '@/store/user.ts'
import type { Directive, DirectiveBinding } from 'vue'

function checkPermission(el: HTMLElement, binding: DirectiveBinding<string[]>) {
  const userStore = useUserStore()
  // 获取绑定的值，此处为权限
  const { value } = binding
  // 获取所有的功能指令
  const btnList = userStore.userInfo?.btnList
  // 当传入的指令集为数组时
  if (value && value instanceof Array && btnList) {
    // 匹配对应的指令
    const hasPermission = btnList.some((btnKey) => {
      return value.includes(btnKey)
    })
    // 如果无法匹配，则表示当前用户无该指令，那么删除对应的功能按钮
    if (!hasPermission) {
      el.remove()
    }
  } else {
    // eslint-disabled-next-line
    throw new Error('v-permission value is ["admin","editor"]')
  }
}

// 使用 ObjectDirective 显式声明类型（可选，但推荐）
const permissionDirective: Directive<HTMLElement, string[]> = {
  mounted(el, binding) {
    checkPermission(el, binding)
  },
  updated(el, binding) {
    checkPermission(el, binding)
  },
}

export default permissionDirective
