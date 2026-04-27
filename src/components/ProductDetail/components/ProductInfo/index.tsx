'use client'

import { useState } from 'react'

import QuantitySelector from '@/components/QuantitySelector'

import AddToCartButton from './_components/AddToCartButton'
import PriceDisplay from './_components/PriceDisplay'
import ProductMeta from './_components/ProductMeta'
import ProductSpecs from './_components/ProductSpecs'
import WishlistButton from './_components/WishlistButton'
import type { ProductInfoProps } from './types'

export default function ProductInfo(props: ProductInfoProps) {
  const {
    title,
    description,
    price,
    originalPrice,
    measurements,
    category,
    sku,
    vin,
    location,
    onAddToCart,
    added = false,
    inCart = false
  } = props

  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className='space-y-6'>
      <div>
        <h1
          className='text-foreground mb-2 text-3xl font-semibold leading-10 tracking-[0.35px]'
          data-testid='product-title'
        >
          {title}
        </h1>
        <p
          className='text-slate-blue text-sm leading-6 tracking-[-0.15px]'
          data-testid='product-description'
        >
          {description}
        </p>
      </div>

      <PriceDisplay price={price} originalPrice={originalPrice} />

      <ProductSpecs measurements={measurements} category={category} />

      <div className='flex w-full items-center gap-4'>
        <QuantitySelector value={quantity} onChange={setQuantity} />
        <WishlistButton
          isWishlisted={isWishlisted}
          onToggle={() => setIsWishlisted(!isWishlisted)}
        />
      </div>

      <AddToCartButton
        onAddToCart={() => onAddToCart(quantity)}
        added={added}
        inCart={inCart}
      />

      <ProductMeta sku={sku} vin={vin} location={location} />
    </div>
  )
}
