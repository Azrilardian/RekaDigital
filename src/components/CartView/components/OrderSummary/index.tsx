import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { OrderSummaryProps } from './types'

export default function OrderSummary(props: OrderSummaryProps) {
  const { total, itemCount, onCheckout, onClearCart } = props

  return (
    <div className='sticky top-24 rounded-lg border border-slate-200 bg-white p-6'>
      <h2 className='mb-5 text-lg font-bold text-slate-900'>Order Summary</h2>

      <dl className='mb-5 space-y-3 text-sm'>
        <div className='flex justify-between text-slate-600'>
          <dt>
            Subtotal ({itemCount} item{itemCount !== 1 ? 's' : ''})
          </dt>
          <dd className='font-medium text-slate-900'>${total.toFixed(2)}</dd>
        </div>

        <Separator />
        <div className='flex justify-between text-base font-bold text-slate-900'>
          <dt>Total</dt>
          <dd>${total.toFixed(2)}</dd>
        </div>
      </dl>

      <Button onClick={onCheckout} className='w-full font-semibold'>
        Proceed to Checkout
      </Button>

      <Button
        variant='outline'
        onClick={onClearCart}
        className='mt-3 w-full text-xs text-slate-400 transition-colors hover:text-red-400'
      >
        Clear Cart
      </Button>
    </div>
  )
}
