import { QueryClient } from '@tanstack/react-query'

import { CACHE_CONFIG } from '@/config/constants'

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: CACHE_CONFIG.STALE_TIME,
        gcTime: CACHE_CONFIG.GC_TIME,
        retry: CACHE_CONFIG.RETRY_COUNT,
        refetchOnWindowFocus: CACHE_CONFIG.REFETCH_ON_WINDOW_FOCUS,
        throwOnError: false,
        retryDelay: CACHE_CONFIG.RETRY_DELAY
      }
    }
  })
}

let browserQueryClient: QueryClient | undefined

/**
 * Server: new client per request (prefetch + dehydrate).
 * Browser: singleton for the session.
 */
export function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient()
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient()
  }
  return browserQueryClient
}
