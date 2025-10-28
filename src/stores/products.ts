import { defineStore } from 'pinia'
import type { Product } from '@/types/product'
import data from '@/data/products.json'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: data as Product[],
  }),
  getters: {
    getById: (state) => (id: number) => state.products.find((p) => p.id === id),
  },
})
