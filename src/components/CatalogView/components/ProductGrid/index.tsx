import ProductCard from '@/components/ProductCard'
import type { ProductGridProps } from './types'
import { getGridClassName } from './utils'
import ProductCardSkeleton from '@/components/ProductCard/components/ProductCardSkeleton'

const EmptyState = () => (
  <div className='text-foreground py-24 text-center'>
    <p className='text-lg font-medium'>No products found</p>
    <p className='mt-1 text-sm'>Try adjusting your search or filters</p>
  </div>
)

const LoadingState = () => (
  <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
    {Array.from({ length: 9 }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
)

export default function ProductGrid(props: ProductGridProps) {
  const { products, viewMode, isLoading, isEmpty } = props

  if (isLoading) return <LoadingState />

  if (isEmpty) return <EmptyState />

  const gridClassName = getGridClassName(viewMode)
  const isListView = viewMode === 'list'

  return (
    <div className={gridClassName}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={isListView ? 'list' : undefined}
        />
      ))}
    </div>
  )
}
