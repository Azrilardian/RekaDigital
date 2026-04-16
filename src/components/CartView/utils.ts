import type { CartItem } from '@/types'
import type { CartTotals } from './types'

export function calculateCartTotals(items: CartItem[]): CartTotals {
  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0)
  const itemCount = items.reduce((acc, i) => acc + i.quantity, 0)

  return { total, itemCount }
}
