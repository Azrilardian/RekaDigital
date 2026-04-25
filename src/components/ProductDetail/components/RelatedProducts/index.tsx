import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import ProductCard from '@/components/ProductCard'

import type { RelatedProductsProps } from './types'

export default function RelatedProducts(props: RelatedProductsProps) {
  const { products } = props

  return (
    <section className='mb-32 mt-28'>
      <div className='mb-8 flex items-center justify-between'>
        <h2 className='text-foreground text-xl font-semibold leading-8 tracking-[0.07px] sm:text-2xl'>
          You might also like
        </h2>
        <Link
          href='/'
          className='text-dark-blue-darker hover:text-dark-blue-darker/70 flex items-center gap-1 text-sm font-medium leading-5 tracking-[-0.15px] transition-colors'
        >
          More Products
          <ChevronRight size={16} className='text-dark-blue-darker' />
        </Link>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
