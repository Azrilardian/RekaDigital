export interface OrderSummaryProps {
  total: number
  itemCount: number
  onCheckout: () => void
  onClearCart: () => void
}
