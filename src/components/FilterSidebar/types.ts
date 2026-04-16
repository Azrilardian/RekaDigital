export interface FilterSidebarProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  selectedPriceRanges: string[]
  onPriceRangeChange: (id: string, checked: boolean) => void
  isLoading?: boolean
}
