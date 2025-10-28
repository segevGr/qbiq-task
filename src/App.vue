<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
const theme = useThemeStore()
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <router-link to="/" class="font-semibold text-gray-800 dark:text-gray-100">
          Mini E-Commerce
        </router-link>

        <button
          @click="theme.toggleTheme"
          class="text-sm px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {{ theme.isDark ? 'Change to Light Mode ☀️' : 'Change to Dark Mode 🌙' }}
        </button>
      </div>
    </nav>

    <router-view />
  </div>
</template>
