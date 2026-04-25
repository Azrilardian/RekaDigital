import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { Metadata } from 'next'

import CatalogView from '@/components/CatalogView'
import HeroSection from '@/components/HeroSection'
import NewsletterSection from '@/components/NewsletterSection'
import { fetchCategories, fetchProducts } from '@/lib/cache'
import { getQueryClient } from '@/lib/get-query-client'
import { queryKeys } from '@/lib/queryKeys'

export const metadata: Metadata = {
  title: 'Shop Catalog — Find Your Perfect Vehicle',
  description: 'Browse our premium selection of certified automobiles.'
}

export default async function Page() {
  const queryClient = getQueryClient()

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: queryKeys.products.all,
      queryFn: fetchProducts
    }),
    queryClient.prefetchQuery({
      queryKey: queryKeys.categories,
      queryFn: fetchCategories
    })
  ])

  return (
    <>
      <HeroSection />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CatalogView />
      </HydrationBoundary>
      <NewsletterSection />
    </>
  )
}
