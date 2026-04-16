import { Heart } from 'lucide-react'
import type { WishlistButtonProps } from './types'

export default function WishlistButton(props: WishlistButtonProps) {
  const { isWishlisted, onToggle } = props

  return (
    <button
      onClick={onToggle}
      className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 p-3 transition-all ${
        isWishlisted
          ? 'border-red-500 bg-red-50'
          : 'border-pale-gray hover:border-pale-gray/80'
      }`}
      aria-label='Add to wishlist'
    >
      <Heart
        size={16}
        className={`${
          isWishlisted ? 'fill-red-500 text-red-500' : 'text-slate-blue'
        }`}
      />

      <span className='text-foreground text-sm font-medium leading-5 tracking-[-0.15px]'>
        {isWishlisted ? 'Remove from wishlist' : 'Wishlist'}
      </span>
    </button>
  )
}
