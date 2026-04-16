/**
 * API Configuration
 * Centralized API endpoints and settings
 */
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://fakestoreapi.com',
  REVALIDATE_TIME: 300, // 5 minutes in seconds
  IMAGE_HOSTNAME: 'fakestoreapi.com'
} as const

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  PRODUCTS: `${API_CONFIG.BASE_URL}/products`,
  CATEGORIES: `${API_CONFIG.BASE_URL}/products/categories`,
  product: (id: number) => `${API_CONFIG.BASE_URL}/products/${id}`
} as const
