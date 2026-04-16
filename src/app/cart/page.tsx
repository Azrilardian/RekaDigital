import CartView from '@/components/CartView'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Cart — ShopCatalog',
  description: 'Review your selected items and proceed to checkout.'
}

export default function CartPage() {
  return <CartView />
}
