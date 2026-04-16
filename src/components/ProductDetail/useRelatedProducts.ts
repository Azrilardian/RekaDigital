'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import { CACHE_CONFIG } from '@/config/ui-constants'
import type { Product } from '@/types'

export function useRelatedProducts(
  currentProductId: number | undefined,
  currentCategory: string | undefined,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: queryKeys.products.all,
    queryFn: fetchProducts,
    enabled: enabled && !!currentProductId,
    select: (products: Product[]) => {
      const filtered = products.filter(
        (p) =>
          p.id !== currentProductId &&
          (!currentCategory || p.category === currentCategory)
      )

      return filtered.slice(0, 4)
    },
    staleTime: CACHE_CONFIG.STALE_TIME
  })
}
