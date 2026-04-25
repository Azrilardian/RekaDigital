import { cache } from 'react'

import { unstable_cache } from 'next/cache'

import { API_CONFIG } from '@/config/constants'
import { productApi } from '@/services/api'

/**
 * Cached product fetcher to deduplicate requests across server components and metadata
 */
export const fetchProduct = cache((id: number) => {
  return unstable_cache(() => productApi.getProduct(id), [`products/${id}`], {
    revalidate: API_CONFIG.REVALIDATE_TIME
  })()
})

/**
 * Cached products list fetcher
 */
export const fetchProducts = cache(() => {
  return unstable_cache(() => productApi.getProducts(), ['products'], {
    revalidate: API_CONFIG.REVALIDATE_TIME
  })()
})

/**
 * Cached categories fetcher
 */
export const fetchCategories = cache(() => {
  return unstable_cache(() => productApi.getCategories(), ['categories'], {
    revalidate: API_CONFIG.REVALIDATE_TIME
  })()
})
