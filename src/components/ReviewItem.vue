<script setup lang="ts">
import type { Review } from '@/types/product'

const props = defineProps<{
  review: Review
}>()
</script>

<template>
  <li
    class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/60 transition-colors"
  >
    <div class="flex items-center justify-between mb-2">
      <span class="font-medium text-gray-800 dark:text-gray-200">
        {{ review.author }}
      </span>
      <span class="text-sm text-emerald-700 dark:text-emerald-400"> ⭐ {{ review.rating }} </span>
    </div>
    <p class="text-gray-700 dark:text-gray-300 leading-snug">
      {{ review.content }}
    </p>
  </li>
</template>
