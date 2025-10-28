<script setup lang="ts">
import { useProductList } from '@/composables/useProductList'
import ProductCard from '@/components/ProductCard.vue'

const {
  search,
  selectedCategory,
  minPrice,
  maxPrice,
  sortBy,
  categories,
  filtered,
  canLoadMore,
  totalProducts,
  loadMore,
  clearFilters,
} = useProductList()
</script>

<template>
  <section
    class="max-w-6xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-100 transition-colors duration-300"
  >
    <header class="mb-6 space-y-4">
      <h1 class="text-2xl font-bold">Digital Products</h1>

      <!-- Filters Row -->
      <div class="flex flex-wrap gap-3 items-center">
        <!-- Search -->
        <input
          v-model="search"
          type="text"
          placeholder="Search products…"
          class="w-full md:w-64 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-colors duration-300"
        />

        <!-- Category -->
        <select
          v-model="selectedCategory"
          class="w-full md:w-44 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-300"
        >
          <option v-for="c in categories" :key="c" :value="c">
            {{ c === 'all' ? 'All Categories' : c }}
          </option>
        </select>

        <!-- Price range -->
        <div class="flex gap-2 items-center">
          <input
            v-model.number="minPrice"
            type="number"
            placeholder="Min"
            min="0"
            class="w-20 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />
          <span>-</span>
          <input
            v-model.number="maxPrice"
            type="number"
            placeholder="Max"
            min="0"
            class="w-20 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />
        </div>

        <!-- Sort -->
        <select
          v-model="sortBy"
          class="w-full md:w-44 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
        >
          <option value="name-asc">Order by Name ↑</option>
          <option value="name-desc">Order by Name ↓</option>
          <option value="price-asc">Order by Price ↑</option>
          <option value="price-desc">Order by Price ↓</option>
        </select>

        <!-- Clear -->
        <button
          @click="clearFilters"
          class="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Clear Filters
        </button>
      </div>
    </header>

    <!-- Count -->
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
      Showing {{ filtered.length }} of {{ totalProducts }} products
    </p>

    <!-- Product Grid -->
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
