import type { SortOption, ViewMode } from '../../types'

export interface SortAndViewProps {
  sort: SortOption
  onSortChange: (sort: SortOption) => void
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
}
