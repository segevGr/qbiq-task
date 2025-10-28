<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function goHome() {
  router.push({ name: 'products' })
}
</script>

<template>
  <section class="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
    <h1 class="text-4xl font-bold mb-2 text-red-600">404</h1>
    <p class="text-gray-600 mb-6">The page you are looking for does not exist.</p>
    <button
      @click="goHome"
      class="px-5 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
    >
      Back to Home
    </button>
  </section>
</template>
