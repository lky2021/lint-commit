<template>
  <div>about</div>
  <div @click="goHome">home</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/home')
}
</script>

<style scoped></style>
