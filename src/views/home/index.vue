<template>
  <div>home</div>
  <div @click="goAbout">about</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goAbout = () => {
  router.push('/about')
}
</script>

<style scoped></style>
