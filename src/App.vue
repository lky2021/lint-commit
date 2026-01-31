<script setup lang="ts">
import { useCountStore } from '@/store/count.ts'

const store = useCountStore()

const handleClick = () => {
  store.increment()
}
</script>

<template>
  宝宝在干嘛：敲你
  <button class="rounded bg-blue-500 px-4 py-2 text-white" @click="handleClick">
    {{ store.count }}
  </button>
  <router-view></router-view>
</template>

<style scoped></style>
