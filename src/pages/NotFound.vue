<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function goHome() {
  router.push({ name: 'products' })
}
</script>

<template>
  <section
    class="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <h1 class="text-6xl font-extrabold mb-3 text-red-600 dark:text-red-500">404</h1>
    <p class="text-gray-600 dark:text-gray-400 mb-8 text-lg">
      The page you are looking for does not exist.
    </p>

    <button
      @click="goHome"
      class="px-6 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors duration-200 font-medium shadow-sm"
    >
      ← Back to Home
    </button>
  </section>
</template>
