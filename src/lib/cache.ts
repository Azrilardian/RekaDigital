import { cache } from 'react'
import {
  fetchProduct as fetchProductImpl,
  fetchProducts as fetchProductsImpl,
  fetchCategories as fetchCategoriesImpl
} from './api'

/**
 * Cached product fetcher to deduplicate requests across server components and metadata
 */
export const fetchProduct = cache(fetchProductImpl)

/**
 * Cached products list fetcher
 */
export const fetchProducts = cache(fetchProductsImpl)

/**
 * Cached categories fetcher
 */
export const fetchCategories = cache(fetchCategoriesImpl)
