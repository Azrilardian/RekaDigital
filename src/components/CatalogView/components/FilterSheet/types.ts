export interface FilterSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  selectedPriceRanges: string[]
  onPriceRangeChange: (id: string, checked: boolean) => void
  isLoading?: boolean
  onApplyFilters: () => void
}
