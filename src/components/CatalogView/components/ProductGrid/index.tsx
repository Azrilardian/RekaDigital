import EmptyState from '@/components/EmptyState'
import ErrorState from '@/components/ErrorState'
import ProductCard from '@/components/ProductCard'

import ProductGridSkeleton from './skeleton'
import type { ProductGridProps } from './types'
import { useProductGrid } from './useProductGrid'

export default function ProductGrid(props: ProductGridProps) {
  const { products, isEmpty } = props

  const { gridClassName, isListView, isLoading, isError, error, refetch } =
    useProductGrid()

  if (isLoading) return <ProductGridSkeleton />

  if (isError) return <ErrorState refetch={refetch} error={error} />

  if (isEmpty) return <EmptyState />

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
