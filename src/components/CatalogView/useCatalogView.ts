'use client'

import { useState } from 'react'

import { CATALOG_CONFIG } from '@/config/constants'
import { useProduct } from '@/services/query/hooks/use-product'

export function useCatalogView() {
  const [visibleCount, setVisibleCount] = useState<number>(
    CATALOG_CONFIG.INITIAL_VISIBLE_COUNT
  )
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false)

  const { filteredProducts, productsLoading, category } = useProduct()

  const visibleProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  function handleLoadMore() {
    setVisibleCount((prev) => prev + CATALOG_CONFIG.PAGE_SIZE)
  }

  function toggleFilterSheet() {
    setIsFilterSheetOpen((prev) => !prev)
  }

  function handleApplyFilters() {
    setIsFilterSheetOpen(false)
  }

  const transformedCategoryLabel =
    category.charAt(0).toUpperCase() + category.slice(1)

  const categoryLabel =
    category === 'all' ? 'All Products' : `${transformedCategoryLabel} Products`

  return {
    categoryLabel,
    visibleProducts,
    filteredProducts,
    hasMore,
    handleLoadMore,
    productsLoading,
    isFilterSheetOpen,
    setIsFilterSheetOpen,
    toggleFilterSheet,
    handleApplyFilters
  }
}
