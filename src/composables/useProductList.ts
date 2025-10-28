import { ref, computed } from 'vue'
import { useProductsStore } from '@/stores/products'
import type { Product } from '@/types/product'

const PAGE_SIZE = 12

export function useProductList() {
  const store = useProductsStore()
  const search = ref('')
  const selectedCategory = ref<string>('all')
  const visibleCount = ref(PAGE_SIZE)

  const categories = computed(() => {
    const allCategories = store.products.map((p) => p.category)
    return ['all', ...new Set(allCategories)]
  })

  const filtered = computed<Product[]>(() => {
    const q = search.value.trim().toLowerCase()
    const products = store.products.filter((p) => {
      const matchesSearch = !q || p.name.toLowerCase().includes(q)
      const matchesCategory =
        selectedCategory.value === 'all' || p.category === selectedCategory.value
      return matchesSearch && matchesCategory
    })
    return products.slice(0, visibleCount.value)
  })

  function loadMore() {
    visibleCount.value += PAGE_SIZE
  }

  const canLoadMore = computed(() => visibleCount.value < store.products.length)

  return { search, selectedCategory, categories, filtered, loadMore, canLoadMore }
}
