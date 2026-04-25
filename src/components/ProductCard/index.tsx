'use client'

import GridView from './components/ProductCardView/GridView'
import ListView from './components/ProductCardView/ListView'
import type { ProductCardProps } from './types'

export default function ProductCard(props: ProductCardProps) {
  const { product, viewMode = 'grid' } = props

  const viewProps = {
    product
  }

  if (viewMode === 'list') {
    return <ListView {...viewProps} />
  }

  return <GridView {...viewProps} />
}
