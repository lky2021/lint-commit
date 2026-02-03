<template>
  <div @click="handleLogin">点击登录</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user.ts'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const handleLogin = () => {
  userStore.setToken('123123')
  router.push('/home')
}
</script>

<style scoped></style>
