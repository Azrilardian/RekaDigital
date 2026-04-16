'use client'

import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { clearCart } from '@/store/cartSlice'
import { calculateCartTotals } from './utils'
import { FEEDBACK_TIMINGS } from '@/config/ui-constants'

export function useCartView() {
  const dispatch = useAppDispatch()
  const [checkedOut, setCheckedOut] = useState(false)

  const items = useAppSelector((s) => s.cart.items)
  const hydrated = useAppSelector((s) => s.cart._persist?.rehydrated ?? false)
  const totals = calculateCartTotals(items)

  function handleCheckout() {
    setCheckedOut(true)
    setTimeout(() => {
      dispatch(clearCart())
      setCheckedOut(false)
    }, FEEDBACK_TIMINGS.CHECKOUT_SUCCESS)
  }

  function handleClearCart() {
    dispatch(clearCart())
  }

  return {
    items,
    totals,
    hydrated,
    checkedOut,
    handleCheckout,
    handleClearCart
  }
}
