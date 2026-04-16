import { notFound } from 'next/navigation'
import ProductDetail from '@/components/ProductDetail'
import { API_CONFIG, API_ENDPOINTS } from '@/config/constants'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const numId = Number(id)

  if (isNaN(numId)) return { title: 'Product Not Found' }

  try {
    const res = await fetch(API_ENDPOINTS.product(numId), {
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
  const numId = Number(id)

  if (isNaN(numId) || numId < 1) {
    notFound()
  }

  return <ProductDetail id={numId} />
}
