import { PRICE_RANGES } from '@/config/catalog-filters'
import type { Product } from '@/types'

import type { FilteredProductsParams } from './types'

export function filterAndSortProducts({
  products,
  filters
}: FilteredProductsParams): Product[] {
  let result = [...products]

  if (filters.activeCategory !== 'all') {
    result = result.filter((p) => p.category === filters.activeCategory)
  }

  if (filters.search.trim()) {
    const q = filters.search.toLowerCase()
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    )
  }

  const activePriceRanges = filters.selectedPriceRanges.filter(
    (id) => id !== 'all'
  )

  if (activePriceRanges.length > 0) {
    result = result.filter((p) => {
      return activePriceRanges.some((rangeId) => {
        const range = PRICE_RANGES.find((r) => r.id === rangeId)
        if (!range) return false
        if (range.max === null) return p.price >= range.min
        return p.price >= range.min && p.price < range.max
      })
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
