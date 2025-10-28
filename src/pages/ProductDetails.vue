<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import ReviewItem from '@/components/ReviewItem.vue'

const route = useRoute()
const router = useRouter()
const store = useProductsStore()

const product = computed(() => {
  const id = Number(route.params.id)
  return store.getById(id)
})

function goBack() {
  router.push({ name: 'products' })
}
</script>

<template>
  <section
    class="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-100 transition-colors duration-300"
  >
    <button
      @click="goBack"
      class="mb-6 inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:underline transition"
    >
      ← Back to Products
    </button>

    <!-- במקרה שלא נמצא מוצר -->
    <div
      v-if="!product"
      class="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
    >
      <h2 class="text-xl font-semibold mb-2">Product not found</h2>
      <p class="text-gray-600 dark:text-gray-400">The product ID in the URL does not exist.</p>
    </div>

    <!-- עמוד מוצר -->
    <div
      v-else
      class="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-sm dark:shadow-lg transition-colors duration-300"
    >
      <div class="flex flex-col md:flex-row gap-6">
        <img
          :src="product.thumbnailUrl"
          :alt="product.name"
          class="w-full md:w-80 h-80 object-cover rounded-md shadow-md dark:shadow-gray-900"
        />
        <div class="flex-1">
          <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>

          <div class="text-emerald-700 dark:text-emerald-400 font-semibold mb-4 text-lg">
            ${{ product.price.toFixed(2) }}
          </div>

          <p class="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
            {{ product.shortDescription }}
          </p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ product.longDescription }}
          </p>

          <div class="mt-4">
            <span
              class="inline-block rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-sm font-medium"
            >
              {{ product.category }}
            </span>
          </div>
        </div>
      </div>

      <!-- ביקורות -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold mb-4">Reviews</h2>

        <div v-if="product.reviews?.length">
          <ul class="space-y-4">
            <ReviewItem v-for="r in product.reviews" :key="r.id" :review="r" />
          </ul>
        </div>

        <p v-else class="text-gray-500 dark:text-gray-400">No reviews yet.</p>
      </section>
    </div>
  </section>
</template>
