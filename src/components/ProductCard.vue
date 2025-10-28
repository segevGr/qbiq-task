<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Product } from '@/types/product'

const props = defineProps<{ product: Product }>()
const router = useRouter()

function goToDetails() {
  router.push({ name: 'product-details', params: { id: props.product.id } })
}
</script>

<template>
  <article
    @click="goToDetails"
    class="cursor-pointer rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md dark:hover:shadow-lg transition p-4 flex flex-col hover:-translate-y-1 transform duration-200"
  >
    <img
      :src="product.thumbnailUrl"
      :alt="product.name"
      class="w-full h-40 object-cover rounded-md mb-3"
      loading="lazy"
    />
    <h3 class="font-semibold text-lg mb-1 text-gray-800 dark:text-gray-100">
      {{ product.name }}
    </h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
      {{ product.shortDescription }}
    </p>
    <div class="mt-auto font-bold text-emerald-700 dark:text-emerald-400">
      ${{ product.price.toFixed(2) }}
    </div>
  </article>
</template>
