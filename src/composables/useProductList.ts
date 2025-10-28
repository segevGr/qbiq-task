import { ref, computed } from 'vue'
import { useProductsStore } from '@/stores/products'
import type { Product } from '@/types/product'

export function useProductList() {
  const store = useProductsStore()
  const search = ref('')

  const filtered = computed<Product[]>(() => {
    const q = search.value.trim().toLowerCase()
    if (!q) return store.products
    return store.products.filter((p) => p.name.toLowerCase().includes(q))
  })

  return { search, filtered }
}
