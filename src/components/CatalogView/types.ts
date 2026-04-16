import type { Product } from '@/types'

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating'
export type ViewMode = 'grid-3' | 'grid-2' | 'list'

export interface SortOptionItem {
  value: SortOption
  label: string
}

export interface CatalogFilters {
  search: string
  activeCategory: string
  sort: SortOption
  selectedPriceRanges: string[]
}

export interface FilteredProductsParams {
  products: Product[]
  filters: CatalogFilters
}
