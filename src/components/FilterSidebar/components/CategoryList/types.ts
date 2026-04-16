export interface CategoryListProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}
