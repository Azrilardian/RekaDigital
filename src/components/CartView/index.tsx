'use client'

import CartHeader from './components/CartHeader'
import CartItem from './components/CartItem'
import CartSkeleton from './components/CartSkeleton'
import CheckoutSuccess from './components/CheckoutSuccess'
import EmptyCart from './components/EmptyCart'
import OrderSummary from './components/OrderSummary'
import { useCartView } from './useCartView'

export default function CartView() {
  const {
    items,
    totals,
    hydrated,
    checkedOut,
    handleCheckout,
    handleClearCart
  } = useCartView()

  if (!hydrated) return <CartSkeleton />
  if (checkedOut) return <CheckoutSuccess />
  if (items.length === 0) return <EmptyCart />

  const { total, itemCount } = totals

  return (
    <div className='mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8'>
      <CartHeader itemCount={itemCount} />

      <div className='grid items-start gap-8 lg:grid-cols-3'>
        <div className='space-y-4 lg:col-span-2'>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <OrderSummary
          total={total}
          itemCount={itemCount}
          onCheckout={handleCheckout}
          onClearCart={handleClearCart}
        />
      </div>
    </div>
  )
}
