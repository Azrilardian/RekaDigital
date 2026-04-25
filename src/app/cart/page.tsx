import type { Metadata } from 'next'

import CartView from '@/components/CartView'

export const metadata: Metadata = {
  title: 'Your Cart — ShopCatalog',
  description: 'Review your selected items and proceed to checkout.'
}

export default function CartPage() {
  return <CartView />
}
