import { ProductGridProps } from './types'

export const getGridClassName = (viewMode: ProductGridProps['viewMode']) => {
  switch (viewMode) {
    case 'grid-3':
      return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
    case 'grid-2':
      return 'grid grid-cols-1 sm:grid-cols-2 gap-6'
    case 'list':
      return 'flex flex-col gap-4'
    default:
      return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
  }
}
