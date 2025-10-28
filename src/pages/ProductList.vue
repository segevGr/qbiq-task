<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useProductList } from '@/composables/useProductList'
import ProductCard from '@/components/ProductCard.vue'

const { search, filtered, loadMore, canLoadMore } = useProductList()
const sentinel = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!sentinel.value) return
  observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry && entry.isIntersecting && canLoadMore.value) {
      loadMore()
    }
  })
  observer.observe(sentinel.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <section
    class="max-w-6xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-100 transition-colors duration-300"
  >
    <header class="mb-6 flex items-center justify-between gap-3 flex-wrap">
      <h1 class="text-2xl font-bold">Digital Products</h1>

      <input
        v-model="search"
        type="text"
        placeholder="Search products…"
        class="w-full md:w-80 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-colors duration-300"
      />
    </header>

    <div v-if="filtered.length === 0" class="text-gray-500 dark:text-gray-400">
      No products found.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="p in filtered" :key="p.id" :product="p" />
    </div>

    <div ref="sentinel" class="h-10"></div>
  </section>
</template>
