import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import type { Product } from '@/types/product'

export function useProductDetails() {
  const route = useRoute()
  const router = useRouter()
  const store = useProductsStore()

  const product = computed<Product | undefined>(() => {
    const id = Number(route.params.id)
    return store.getById(id)
  })

  function goBack() {
    router.push({ name: 'products' })
  }

  return { product, goBack }
}
