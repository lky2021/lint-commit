<template>
  <div>
    123123
    <button @click="goHome">go homePage</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.replace('/home')
}
</script>

<style scoped></style>
