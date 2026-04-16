import { Check, ShoppingCart } from 'lucide-react'

export const getButtonState = (added: boolean, inCart: boolean) => {
  if (added) {
    return {
      className: 'cursor-default bg-green-500 hover:bg-green-500',
      icon: Check,
      text: 'Added to Cart'
    }
  }

  if (inCart) {
    return {
      className: 'bg-slate-500 hover:bg-slate-600',
      icon: ShoppingCart,
      text: 'Already in Cart'
    }
  }

  return {
    className: 'bg-dark-blue-darker hover:bg-dark-blue-darker/90',
    icon: ShoppingCart,
    text: 'Add to Cart'
  }
}
