import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import StarRating from '../StarRating'
import ProductCardHeader from './_components/ProductCardHeader'
import ProductCardDescription from './_components/ProductCardDescription'
import ProductCardFooter from './_components/ProductCardFooter'
import type { ProductCardViewProps } from './types'

export default function GridView(props: ProductCardViewProps) {
  const { product } = props

  return (
    <div className='border-pale-gray shadow-xs group flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-200 hover:-translate-y-0.5'>
      <Link
        href={`/products/${product.id}`}
        className='relative block h-[260px] w-full overflow-hidden bg-slate-50'
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-contain p-6 transition-transform duration-300 group-hover:scale-105'
        />
        <Badge
          variant='secondary'
          className='absolute left-4 top-4 rounded-sm border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold capitalize tracking-wider text-slate-600'
        >
          {product.category}
        </Badge>
      </Link>

      <div className='flex flex-1 flex-col gap-4 p-5'>
        <StarRating rate={product.rating.rate} />

        <ProductCardHeader product={product} />

        <ProductCardDescription description={product.description} />

        <ProductCardFooter productId={product.id} price={product.price} />
      </div>
    </div>
  )
}
