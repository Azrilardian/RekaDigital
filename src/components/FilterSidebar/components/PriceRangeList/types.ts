export interface PriceRangeListProps {
  selectedPriceRanges: string[]
  onPriceRangeChange: (rangeId: string, checked: boolean) => void
}
