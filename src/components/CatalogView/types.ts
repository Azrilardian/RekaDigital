import type { Product } from '@/types'

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating'
export type ViewMode = 'grid-3' | 'grid-2' | 'list'

export interface SortOptionItem {
  value: SortOption
  label: string
}

export interface CatalogFilters {
  category: string
  sort: SortOption
  priceRange: string
}

export interface FilteredProductsParams {
  products: Product[]
  filters: CatalogFilters
}
