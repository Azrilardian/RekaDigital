import { usePriceRangeParams } from '@/hooks/urlParams'

export function usePriceRangeList() {
  const { currentValue: priceRange, updateParam: updatePriceRangeParam } =
    usePriceRangeParams()

  return {
    priceRange,
    updatePriceRangeParam
  }
}
