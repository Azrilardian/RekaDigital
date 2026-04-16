export interface ProductInfoProps {
  title: string
  description: string
  price: number
  originalPrice?: number
  measurements: string
  category: string
  sku: string
  vin: string
  location: string
  onAddToCart: (quantity: number) => void
  added?: boolean
  inCart?: boolean
}
