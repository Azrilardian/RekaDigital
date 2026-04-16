'use client'

import { useProductDetail } from './useProductDetail'
import { useRelatedProducts } from './useRelatedProducts'
import type { ProductDetailProps } from './types'
import Breadcrumb from './components/Breadcrumb'
import ImageGallery from './components/ImageGallery'
import ProductInfo from './components/ProductInfo'
import RelatedProducts from './components/RelatedProducts'
import ProductDetailSkeleton from './components/ProductDetailSkeleton'

export default function ProductDetail(props: ProductDetailProps) {
  const { id } = props

  const { product, isLoading, error, handleAddToCart, added, inCart } =
    useProductDetail(id)

  const { data: relatedProducts = [] } = useRelatedProducts(
    product?.id,
    product?.category,
    !!product
  )

  if (isLoading) return <ProductDetailSkeleton />

  if (error || !product) {
    return (
      <div className='mx-auto max-w-5xl px-4 py-20 text-center'>
        <p className='text-foreground mb-2 text-xl font-semibold'>
          Product not found
        </p>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Inventory', href: '/' },
    { label: product.title, href: `/products/${id}` }
  ]

  const images = [product.image, product.image, product.image, product.image]

  return (
    <div className='mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8'>
      <Breadcrumb items={breadcrumbItems} />

      <div className='grid gap-12 lg:grid-cols-2'>
        <ImageGallery images={images} title={product.title} />

        <ProductInfo
          title={product.title}
          description={product.description}
          price={product.price}
          originalPrice={product.price * 1.15}
          measurements='2023 • 12,450 mi • Automatic'
          category='Sedan, Certified Pre-Owned'
          sku='1117'
          vin='WBA5B3C09ED123456'
          location='Los Angeles, CA'
          onAddToCart={handleAddToCart}
          added={added}
          inCart={inCart}
        />
      </div>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}
