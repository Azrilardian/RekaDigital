import { useSortParams, useViewModeParams } from '@/hooks/urlParams'

export const useSortAndView = () => {
  const { currentValue: sort, updateParam: updateSortParam } = useSortParams()

  const { currentValue: viewMode, updateParam: updateViewModeParam } =
    useViewModeParams()

  return {
    sort,
    viewMode,
    updateSortParam,
    updateViewModeParam
  }
}
