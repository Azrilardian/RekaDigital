'use client'

import { useState } from 'react'

import { FEEDBACK_TIMINGS } from '@/config/constants'
import { clearCart } from '@/store/cartSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

import { calculateCartTotals } from './utils'

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
