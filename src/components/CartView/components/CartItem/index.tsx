'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Trash2 } from 'lucide-react'
import { setQuantity, removeFromCart } from '@/store/cartSlice'
import { useAppDispatch } from '@/store/hooks'
import type { CartItemProps } from './types'
import { Button } from '@/components/ui/button'
import QuantitySelector from '@/components/QuantitySelector'

export default function CartItem(props: CartItemProps) {
  const { item } = props

  const dispatch = useAppDispatch()

  const handleQuantityChange = (newQuantity: number) => {
    dispatch(setQuantity({ id: item.id, quantity: newQuantity }))
  }

  return (
    <div className='flex gap-4 rounded-lg border border-slate-200 bg-white p-4 transition-all duration-200'>
      <Link
        href={`/products/${item.id}`}
        className='relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-50'
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes='80px'
          className='object-contain p-2'
        />
      </Link>

      <div className='flex min-w-0 flex-1 flex-col gap-1'>
        <Link
          href={`/products/${item.id}`}
          className='line-clamp-2 text-sm font-semibold text-slate-800 transition-colors hover:text-slate-600'
        >
          {item.title}
        </Link>
        <span className='text-xs font-medium uppercase tracking-wider text-slate-400'>
          {item.category}
        </span>
        <p className='mt-auto text-sm font-bold text-slate-900'>
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <div className='flex shrink-0 flex-col items-end justify-between gap-2'>
        <Button
          variant='ghost'
          onClick={() => dispatch(removeFromCart(item.id))}
          className='text-slate-300 transition-colors hover:text-red-400'
          aria-label='Remove item'
        >
          <Trash2 size={16} />
        </Button>

        <QuantitySelector
          value={item.quantity}
          onChange={handleQuantityChange}
        />
      </div>
    </div>
  )
}
