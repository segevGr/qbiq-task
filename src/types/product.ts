export interface Review {
  id: number
  author: string
  content: string
  rating: number
}

export interface Product {
  id: number
  name: string
  price: number
  shortDescription: string
  longDescription: string
  category: string
  thumbnailUrl: string
  reviews: Review[]
}
