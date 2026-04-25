import { ArrowLeft, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function EmptyCart() {
  return (
    <div className='mx-auto max-w-lg px-4 py-24 text-center'>
      <ShoppingBag className='mx-auto mb-4 h-16 w-16 text-slate-300' />
      <h2 className='mb-2 text-2xl font-bold text-slate-800'>
        Your cart is empty
      </h2>
      <p className='mb-8 text-sm text-slate-500'>
        Looks like you haven&apos;t added anything yet.
      </p>
      <Button asChild>
        <Link href='/'>
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>
      </Button>
    </div>
  )
}
