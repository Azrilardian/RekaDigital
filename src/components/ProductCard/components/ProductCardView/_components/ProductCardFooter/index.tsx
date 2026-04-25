import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import type { ProductCardFooterProps } from './types'

export default function ProductCardFooter(props: ProductCardFooterProps) {
  const { productId, price } = props

  return (
    <div className='border-pale-gray mt-auto flex items-center justify-between border-t pt-3.5'>
      <div>
        <p className='text-slate-blue mb-0.5 text-xs'>Starting at</p>
        <p className='text-dark-blue-darker text-xl font-semibold leading-7 tracking-[-0.45px]'>
          ${price.toFixed(2)}
        </p>
      </div>

      <Link
        href={`/products/${productId}`}
        className='text-dark-blue-darker hover:text-dark-blue-darker/70 flex items-center gap-0.5 text-sm font-medium transition-colors'
      >
        View <ChevronRight size={16} className='text-dark-blue-darker' />
      </Link>
    </div>
  )
}
