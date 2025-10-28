<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Product } from '@/types/product'
import productsData from '@/data/products.json'

const route = useRoute()
const router = useRouter()
const products = productsData as Product[]

const product = computed(() => {
  const id = Number(route.params.id)
  return products.find((p) => p.id === id)
})

function goBack() {
  router.push({ name: 'products' })
}
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 py-8">
    <button
      @click="goBack"
      class="mb-6 inline-flex items-center gap-2 text-emerald-700 hover:underline"
    >
      ← Back to Products
    </button>

    <div v-if="!product" class="rounded-lg border p-6 bg-white">
      <h2 class="text-xl font-semibold mb-2">Product not found</h2>
      <p class="text-gray-600">The product ID in the URL does not exist.</p>
    </div>

    <div v-else class="rounded-lg border p-6 bg-white">
      <div class="flex flex-col md:flex-row gap-6">
        <img
          :src="product.thumbnailUrl"
          :alt="product.name"
          class="w-full md:w-72 h-72 object-cover rounded-md"
        />
        <div class="flex-1">
          <h1 class="text-2xl font-bold mb-2">{{ product.name }}</h1>
          <div class="text-emerald-700 font-semibold mb-3">${{ product.price.toFixed(2) }}</div>
          <p class="text-gray-700 mb-2">
            {{ product.shortDescription }}
          </p>
          <p class="text-gray-600">
            {{ product.longDescription }}
          </p>
          <div class="mt-3">
            <span
              class="inline-block rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm"
            >
              {{ product.category }}
            </span>
          </div>
        </div>
      </div>

      <section class="mt-8">
        <h2 class="text-xl font-semibold mb-3">Reviews</h2>
        <div v-if="product.reviews?.length">
          <ul class="space-y-3">
            <li v-for="r in product.reviews" :key="r.id" class="border rounded-lg p-4">
              <div class="flex items-center justify-between mb-1">
                <span class="font-medium">{{ r.author }}</span>
                <span class="text-sm text-emerald-700">⭐ {{ r.rating }}</span>
              </div>
              <p class="text-gray-700">{{ r.content }}</p>
            </li>
          </ul>
        </div>
        <p v-else class="text-gray-500">No reviews yet.</p>
      </section>
    </div>
  </section>
</template>
