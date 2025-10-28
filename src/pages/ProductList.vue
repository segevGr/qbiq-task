<script setup lang="ts">
import { useProductList } from '@/composables/useProductList'
import ProductCard from '@/components/ProductCard.vue'

const { search, selectedCategory, categories, filtered, loadMore, canLoadMore } = useProductList()
</script>

<template>
  <section
    class="max-w-6xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-100 transition-colors duration-300"
  >
    <header class="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h1 class="text-2xl font-bold">Digital Products</h1>

      <div class="flex flex-wrap gap-3">
        <!-- Search -->
        <input
          v-model="search"
          type="text"
          placeholder="Search products…"
          class="w-full md:w-72 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-colors duration-300"
        />

        <!-- Category Filter -->
        <select
          v-model="selectedCategory"
          class="w-full md:w-44 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-300"
        >
          <option v-for="c in categories" :key="c" :value="c">
            {{ c === 'all' ? 'All Categories' : c }}
          </option>
        </select>
      </div>
    </header>

    <div v-if="filtered.length === 0" class="text-gray-500 dark:text-gray-400">
      No products found.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="p in filtered" :key="p.id" :product="p" />
    </div>

    <div v-if="canLoadMore" class="flex justify-center mt-10">
      <button
        @click="loadMore"
        class="px-6 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
      >
        Load More
      </button>
    </div>
  </section>
</template>
