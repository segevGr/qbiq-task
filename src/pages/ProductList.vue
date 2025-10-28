<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Product } from '@/types/product'
import ProductCard from '@/components/ProductCard.vue'
import productsData from '@/data/products.json'

const search = ref('')

const products = ref<Product[]>(productsData as Product[])

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return products.value
  return products.value.filter((p) => p.name.toLowerCase().includes(q))
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <header class="mb-6 flex items-center justify-between gap-3 flex-wrap">
      <h1 class="text-2xl font-bold">Digital Products</h1>

      <input
        v-model="search"
        type="text"
        placeholder="Search products…"
        class="w-full md:w-80 rounded-lg border px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-200"
      />
    </header>

    <div v-if="filtered.length === 0" class="text-gray-500">No products found.</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="p in filtered" :key="p.id" :product="p" />
    </div>
  </section>
</template>
