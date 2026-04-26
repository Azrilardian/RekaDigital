export interface CategoryListProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export interface CategorySkeletonProps {
  count?: number
}
