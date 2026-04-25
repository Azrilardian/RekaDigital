import Image from 'next/image'
import Link from 'next/link'

import StarRating from '../StarRating'
import ProductCardDescription from './_components/ProductCardDescription'
import ProductCardFooter from './_components/ProductCardFooter'
import ProductCardHeader from './_components/ProductCardHeader'
import type { ProductCardViewProps } from './types'

export default function ListView(props: ProductCardViewProps) {
  const { product } = props

  return (
    <div className='border-pale-gray shadow-xs group flex overflow-hidden rounded-2xl border bg-white transition-all duration-200 hover:-translate-y-0.5'>
      <Link
        href={`/products/${product.id}`}
        className='relative w-full shrink-0 overflow-hidden bg-slate-50 sm:w-[240px]'
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes='240px'
          className='object-contain p-6 transition-transform duration-300 group-hover:scale-105'
        />
      </Link>

      <div className='flex min-w-0 flex-1 flex-col justify-between gap-4 p-5'>
        <StarRating rate={product.rating.rate} />

        <ProductCardHeader product={product} />

        <ProductCardDescription description={product.description} />

        <ProductCardFooter productId={product.id} price={product.price} />
      </div>
    </div>
  )
}
