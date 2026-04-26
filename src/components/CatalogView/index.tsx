'use client'

import FilterSidebar from '@/components/FilterSidebar'

import FiltersButton from './components/FiltersButton'
import FilterSheet from './components/FilterSheet'
import LoadMoreButton from './components/LoadMoreButton'
import ProductGrid from './components/ProductGrid'
import SortAndView from './components/SortAndView'
import { useCatalogView } from './useCatalogView'

export default function CatalogView() {
  const {
    categoryLabel,
    visibleProducts,
    filteredProducts,
    hasMore,
    handleLoadMore,
    productsLoading,
    isFilterSheetOpen,
    setIsFilterSheetOpen,
    toggleFilterSheet,
    handleApplyFilters
  } = useCatalogView()

  return (
    <div className='mx-auto mb-24 mt-8 max-w-[1440px] px-4 sm:mt-12 sm:px-6 lg:px-8'>
      <FiltersButton onClick={toggleFilterSheet} />

      <div className='flex items-start gap-8'>
        <div className='hidden lg:block'>
          <FilterSidebar />
        </div>

        <div className='min-w-0 flex-1'>
          <div className='mb-6 flex items-center justify-between gap-2'>
            <h2 className='text-foreground text-lg font-semibold sm:text-xl'>
              {productsLoading ? 'Loading…' : categoryLabel}
            </h2>

            <SortAndView />
          </div>

          <ProductGrid
            products={visibleProducts}
            isEmpty={filteredProducts.length === 0}
          />

          {!productsLoading && hasMore && (
            <LoadMoreButton onLoadMore={handleLoadMore} />
          )}
        </div>
      </div>

      <FilterSheet
        open={isFilterSheetOpen}
        onOpenChange={setIsFilterSheetOpen}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  )
}
