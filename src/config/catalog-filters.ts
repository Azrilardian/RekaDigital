/**
 * Catalog Filter Configuration
 * Sort options and price range definitions
 */

export const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'rating', label: 'Top Rated' }
] as const

export interface PriceRange {
  id: string
  label: string
  min: number
  max: number | null
}

export const PRICE_RANGES: PriceRange[] = [
  { id: 'all', label: 'All Prices', min: 0, max: null },
  { id: '0-25', label: 'Under $25', min: 0, max: 25 },
  { id: '25-50', label: '$25 – $50', min: 25, max: 50 },
  { id: '50-100', label: '$50 – $100', min: 50, max: 100 },
  { id: '100-500', label: '$100 – $500', min: 100, max: 500 },
  { id: '500+', label: '$500+', min: 500, max: null }
]
