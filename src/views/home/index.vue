<template>
  <div>home</div>
  <div @click="goAbout">about</div>
  <span v-permission="['home: add']">新增</span>
  <span v-permission="['home: upd']" class="ml-[5px]">更新</span>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goAbout = () => {
  router.push('/about')
}
</script>

<style scoped></style>
