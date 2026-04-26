import { useCategoryParams, usePriceRangeParams } from '@/hooks/urlParams'

export function useFilterSheet() {
  const { updateParam: updateCategoryParam } = useCategoryParams()
  const { updateParam: updatePriceRangeParam } = usePriceRangeParams()

  const handleClearAll = () => {
    updateCategoryParam('all')
    updatePriceRangeParam('all')
  }

  return {
    handleClearAll
  }
}
