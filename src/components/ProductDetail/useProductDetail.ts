'use client'

import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { FEEDBACK_TIMINGS } from '@/config/constants'
import { fetchProduct } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import { addToCart } from '@/store/cartSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

export function useProductDetail(id: number) {
  const dispatch = useAppDispatch()
  const [added, setAdded] = useState(false)

  const {
    data: product,
    isLoading,
    error
  } = useQuery({
    queryKey: queryKeys.products.detail(id),
    queryFn: () => fetchProduct(id)
  })

  const inCart = useAppSelector((s) => s.cart.items.some((i) => i.id === id))

  function handleAddToCart(quantity: number = 1) {
    if (!product) return
    dispatch(addToCart({ product, quantity }))
    setAdded(true)
    setTimeout(() => setAdded(false), FEEDBACK_TIMINGS.CART_ADDED)
  }

  return { product, isLoading, error, added, inCart, handleAddToCart }
}
