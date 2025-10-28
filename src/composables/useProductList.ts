import { ref, computed } from 'vue'
import { useProductsStore } from '@/stores/products'
import type { Product } from '@/types/product'

const PAGE_SIZE = 12

export function useProductList() {
  const store = useProductsStore()

  const search = ref('')
  const selectedCategory = ref<string>('all')
  const minPrice = ref<number | null>(null)
  const maxPrice = ref<number | null>(null)
  const sortBy = ref<'name-asc' | 'name-desc' | 'price-asc' | 'price-desc'>('name-asc')
  const visibleCount = ref(PAGE_SIZE)
  const categories = computed(() => {
    const allCategories = store.products.map((p) => p.category)
    return ['all', ...new Set(allCategories)]
  })

  // Total products
  const totalProducts = computed(() => store.products.length)

  // Filtered + Sorted Products
  const filtered = computed<Product[]>(() => {
    let products = [...store.products]

    // Search Function
    const q = search.value.trim().toLowerCase()
    if (q) {
      products = products.filter((p) => p.name.toLowerCase().includes(q))
    }

    // Category Function
    if (selectedCategory.value !== 'all') {
      products = products.filter((p) => p.category === selectedCategory.value)
    }

    // Price Function
    if (minPrice.value !== null) {
      products = products.filter((p) => p.price >= minPrice.value!)
    }
    if (maxPrice.value !== null) {
      products = products.filter((p) => p.price <= maxPrice.value!)
    }

    // Sort Function
    products.sort((a, b) => {
      switch (sortBy.value) {
        case 'name-asc':
          return a.name.localeCompare(b.name)
        case 'name-desc':
          return b.name.localeCompare(a.name)
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        default:
          return 0
      }
    })

    return products.slice(0, visibleCount.value)
  })

  function loadMore() {
    visibleCount.value += PAGE_SIZE
  }

  const canLoadMore = computed(() => visibleCount.value < store.products.length)

  function clearFilters() {
    search.value = ''
    selectedCategory.value = 'all'
    minPrice.value = null
    maxPrice.value = null
    sortBy.value = 'name-asc'
  }

  return {
    // states
    search,
    selectedCategory,
    minPrice,
    maxPrice,
    sortBy,
    categories,
    filtered,
    canLoadMore,
    totalProducts,

    // actions
    loadMore,
    clearFilters,
  }
}
