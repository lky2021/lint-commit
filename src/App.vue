<script setup lang="ts">
import { useCountStore } from '@/store/count.ts'

const store = useCountStore()

const handleClick = () => {
  store.increment()
}
</script>

<template>
  <button class="rounded bg-blue-500 px-4 py-2 text-white" @click="handleClick">
    点击我{{ store.count }}
  </button>
</template>

<style scoped></style>
