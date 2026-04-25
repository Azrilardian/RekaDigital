import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import type { CartHeaderProps } from './types'

export default function CartHeader(props: CartHeaderProps) {
  const { itemCount } = props

  return (
    <div className='mb-8 flex items-center justify-between'>
      <div>
        <h1 className='text-3xl font-extrabold text-slate-900'>Your Cart</h1>
        <p className='mt-0.5 text-sm text-slate-500'>
          {itemCount} item{itemCount !== 1 ? 's' : ''}
        </p>
      </div>
      <Link
        href='/'
        className='inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900'
      >
        <ArrowLeft size={16} />
        Continue Shopping
      </Link>
    </div>
  )
}
