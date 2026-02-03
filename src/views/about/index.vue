<template>
  <div>about</div>
  <div @click="goHome">home</div>
  <span v-permission="['about: add']">新增</span>
  <span v-permission="['about: upd']" class="ml-[5px]">更新</span>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/home')
}
</script>

<style scoped></style>
