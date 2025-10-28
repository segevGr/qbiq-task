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
    class="cursor-pointer rounded-xl border bg-white hover:shadow-md transition p-4 flex flex-col"
  >
    <img
      :src="product.thumbnailUrl"
      :alt="product.name"
      class="w-full h-40 object-cover rounded-md mb-3"
      loading="lazy"
    />
    <h3 class="font-semibold text-lg mb-1 line-clamp-1">{{ product.name }}</h3>
    <p class="text-sm text-gray-500 mb-2 line-clamp-2">{{ product.shortDescription }}</p>
    <div class="mt-auto font-bold text-emerald-700">${{ product.price.toFixed(2) }}</div>
  </article>
</template>

<style scoped></style>
