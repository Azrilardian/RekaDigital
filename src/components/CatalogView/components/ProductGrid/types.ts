import type { Product } from '@/types'
import type { ViewMode } from '../../types'

export interface ProductGridProps {
  products: Product[]
  viewMode: ViewMode
  isLoading: boolean
  isEmpty: boolean
}
