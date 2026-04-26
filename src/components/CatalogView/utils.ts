import { PRICE_RANGES } from '@/config/catalog-filters'
import type { Product } from '@/types'

import type { FilteredProductsParams } from './types'

export function filterAndSortProducts({
  products,
  filters
}: FilteredProductsParams): Product[] {
  let result = [...products]

  if (filters.category !== 'all') {
    result = result.filter((p) => p.category === filters.category)
  }

  const activePriceRanges = filters.priceRange

  if (activePriceRanges !== 'all') {
    result = result.filter((p) => {
      const range = PRICE_RANGES.find((r) => r.id === activePriceRanges)
      if (!range) return false

      if (range.max === null) return p.price >= range.min
      return p.price >= range.min && p.price < range.max
    })
  }

  switch (filters.sort) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      result.sort((a, b) => b.rating.rate - a.rating.rate)
      break
  }

  return result
}
