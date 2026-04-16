/**
 * UI Configuration Constants
 * Centralized UI timing, pagination, and cache settings
 */

/**
 * Catalog configuration
 */
export const CATALOG_CONFIG = {
  PAGE_SIZE: 9,
  INITIAL_VISIBLE_COUNT: 9
} as const

/**
 * React Query cache configuration
 */
export const CACHE_CONFIG = {
  STALE_TIME: 60_000, // 1 minute
  GC_TIME: 5 * 60_000, // 5 minutes
  RETRY_COUNT: 2,
  REFETCH_ON_WINDOW_FOCUS: false
} as const

/**
 * User feedback timing (in milliseconds)
 */
export const FEEDBACK_TIMINGS = {
  CART_ADDED: 2000, // Success message duration after adding to cart
  CHECKOUT_SUCCESS: 3000 // Success message duration after checkout
} as const
