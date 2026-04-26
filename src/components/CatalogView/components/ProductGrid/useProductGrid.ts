import { useQuery } from '@tanstack/react-query'

import { useViewModeParams } from '@/hooks/urlParams'
import { fetchProducts } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'

import { getGridClassName } from './utils'
import { ViewMode } from '../../types'

export function useProductGrid() {
  const { isLoading, isError, error, refetch } = useQuery({
    queryKey: queryKeys.products.all,
    queryFn: fetchProducts
  })

  const { currentValue: viewMode } = useViewModeParams()

  const gridClassName = getGridClassName(viewMode as ViewMode)

  const isListView = viewMode === 'list'

  return { gridClassName, isListView, isLoading, isError, error, refetch }
}
