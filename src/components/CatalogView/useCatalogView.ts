'use client'

import { useMemo, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { CATALOG_CONFIG } from '@/config/constants'
import { fetchCategories, fetchProducts } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'

import type { SortOption, ViewMode } from './types'
import { filterAndSortProducts } from './utils'

export function useCatalogView() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [sort, setSort] = useState<SortOption>('default')
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>('grid-3')
  const [visibleCount, setVisibleCount] = useState<number>(
    CATALOG_CONFIG.INITIAL_VISIBLE_COUNT
  )
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false)

  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: queryKeys.products.all,
    queryFn: fetchProducts
  })

  const { data: categories = [], isLoading: categoriesLoading } = useQuery({
    queryKey: queryKeys.categories,
    queryFn: fetchCategories
  })

  const filtered = useMemo(
    () =>
      filterAndSortProducts({
        products,
        filters: { search, activeCategory, sort, selectedPriceRanges }
      }),
    [products, search, activeCategory, sort, selectedPriceRanges]
  )

  const visibleProducts = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function handlePriceRangeChange(id: string, checked: boolean) {
    setVisibleCount(CATALOG_CONFIG.INITIAL_VISIBLE_COUNT)

    if (id === 'all') {
      setSelectedPriceRanges(checked ? ['all'] : [])
      return
    }

    setSelectedPriceRanges((prev) => {
      const withoutAll = prev.filter((r) => r !== 'all')
      return checked ? [...withoutAll, id] : withoutAll.filter((r) => r !== id)
    })
  }

  function handleCategoryChange(cat: string) {
    setActiveCategory(cat)
    setVisibleCount(CATALOG_CONFIG.INITIAL_VISIBLE_COUNT)
  }

  function handleLoadMore() {
    setVisibleCount((prev) => prev + CATALOG_CONFIG.PAGE_SIZE)
  }

  function toggleFilterSheet() {
    setIsFilterSheetOpen((prev) => !prev)
  }

  function handleApplyFilters() {
    setIsFilterSheetOpen(false)
  }

  return {
    search,
    setSearch,
    activeCategory,
    handleCategoryChange,
    sort,
    setSort,
    selectedPriceRanges,
    handlePriceRangeChange,
    viewMode,
    setViewMode,
    visibleProducts,
    filtered,
    hasMore,
    handleLoadMore,
    categories,
    productsLoading,
    categoriesLoading,
    isFilterSheetOpen,
    setIsFilterSheetOpen,
    toggleFilterSheet,
    handleApplyFilters
  }
}
