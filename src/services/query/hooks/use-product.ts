import { useMemo } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { SortOption } from '@/components/CatalogView/types'
import { filterAndSortProducts } from '@/components/CatalogView/utils'
import { fetchProducts } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'

export function useProduct() {
  const searchParams = useSearchParams()

  const category = searchParams.get('category') || 'all'
  const sort = searchParams.get('sort') as SortOption
  const priceRange = searchParams.get('priceRange') || 'all'

  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: queryKeys.products.all,
    queryFn: fetchProducts
  })

  const filteredProducts = useMemo(
    () =>
      filterAndSortProducts({
        products,
        filters: { category, sort, priceRange }
      }),
    [products, category, sort, priceRange]
  )

  return { filteredProducts, products, productsLoading, category }
}
