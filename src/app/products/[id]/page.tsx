import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import ProductDetail from '@/components/ProductDetail'
import { API_CONFIG } from '@/config/constants'
import { API_BASE_URL } from '@/config/env'
import { fetchProduct } from '@/lib/cache'
import { getQueryClient } from '@/lib/get-query-client'
import { queryKeys } from '@/lib/queryKeys'

interface Props {
  params: Promise<{ id: string }>
}

function getProductId(value: string): number | null {
  const productId = Number(value)
  if (Number.isNaN(productId) || productId < 1) {
    return null
  }

  return productId
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const productId = getProductId(id)

  if (productId === null) return { title: 'Product Not Found' }

  try {
    const res = await fetch(`${API_BASE_URL}/products/${productId}`, {
      next: { revalidate: API_CONFIG.REVALIDATE_TIME }
    })

    if (!res.ok) return { title: 'Product Not Found' }

    const product = await res.json()
    return {
      title: `${product.title} — ShopCatalog`,
      description: product.description?.slice(0, 160)
    }
  } catch {
    return { title: 'Product — ShopCatalog' }
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const productId = getProductId(id)

  if (productId === null) {
    notFound()
  }

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: queryKeys.products.detail(productId),
    queryFn: () => fetchProduct(productId)
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetail id={productId} />
    </HydrationBoundary>
  )
}
