import type { Product } from '@/types'
import { API_CONFIG, API_ENDPOINTS } from '@/config/constants'

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_ENDPOINTS.PRODUCTS, {
    next: { revalidate: API_CONFIG.REVALIDATE_TIME }
  })

  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function fetchProduct(id: number): Promise<Product> {
  const res = await fetch(API_ENDPOINTS.product(id), {
    next: { revalidate: API_CONFIG.REVALIDATE_TIME }
  })

  if (!res.ok) throw new Error(`Failed to fetch product ${id}`)
  return res.json()
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(API_ENDPOINTS.CATEGORIES, {
    next: { revalidate: API_CONFIG.REVALIDATE_TIME }
  })

  if (!res.ok) throw new Error('Failed to fetch categories')
  return res.json()
}
