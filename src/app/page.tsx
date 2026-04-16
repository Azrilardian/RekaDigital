import HeroSection from '@/components/HeroSection'
import CatalogView from '@/components/CatalogView'
import NewsletterSection from '@/components/NewsletterSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop Catalog — Find Your Perfect Vehicle',
  description:
    'Browse our premium selection of certified automobiles. Find your perfect vehicle from our extensive catalog of cars, trucks, and SUVs.'
}

export default function CatalogPage() {
  return (
    <>
      <HeroSection />
      <CatalogView />
      <NewsletterSection />
    </>
  )
}
