import Link from 'next/link'
import type { ProductCardHeaderProps } from './types'

export default function ProductCardHeader(props: ProductCardHeaderProps) {
  const { product } = props

  return (
    <div>
      <Link href={`/products/${product.id}`}>
        <h3 className='text-foreground hover:text-foreground/70 line-clamp-2 font-semibold leading-snug tracking-[-0.3px] transition-colors'>
          {product.title}
        </h3>
      </Link>

      <p className='text-slate-blue mt-1 text-xs font-semibold uppercase tracking-[0.6px]'>
        {product.category}
      </p>
    </div>
  )
}
