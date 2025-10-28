import { ref, computed } from 'vue'
import { useProductsStore } from '@/stores/products'
import type { Product } from '@/types/product'

const PAGE_SIZE = 12

export function useProductList() {
  const store = useProductsStore()
  const search = ref('')
  const visibleCount = ref(PAGE_SIZE)

  const filtered = computed<Product[]>(() => {
    const q = search.value.trim().toLowerCase()
    const products = !q
      ? store.products
      : store.products.filter((p) => p.name.toLowerCase().includes(q))
    return products.slice(0, visibleCount.value)
  })

  function loadMore() {
    visibleCount.value += PAGE_SIZE
  }

  const canLoadMore = computed(() => visibleCount.value < store.products.length)

  return { search, filtered, loadMore, canLoadMore }
}
