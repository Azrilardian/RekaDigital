'use client'

import type { ProductCardProps } from './types'

import GridView from './components/ProductCardView/GridView'
import ListView from './components/ProductCardView/ListView'

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
