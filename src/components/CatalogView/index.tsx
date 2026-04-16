'use client'

import FilterSidebar from '@/components/FilterSidebar'
import SortAndView from './components/SortAndView'
import ProductGrid from './components/ProductGrid'
import LoadMoreButton from './components/LoadMoreButton'
import FilterSheet from './components/FilterSheet'
import FiltersButton from './components/FiltersButton'
import { useCatalogView } from './useCatalogView'

export default function CatalogView() {
  const {
    activeCategory,
    handleCategoryChange,
    sort,
    setSort,
    selectedPriceRanges,
    handlePriceRangeChange,
    viewMode,
    setViewMode,
    visibleProducts,
    filtered,
    hasMore,
    handleLoadMore,
    categories,
    productsLoading,
    categoriesLoading,
    isFilterSheetOpen,
    setIsFilterSheetOpen,
    toggleFilterSheet,
    handleApplyFilters
  } = useCatalogView()

  const transformedCategoryLabel =
    activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)

  const categoryLabel =
    activeCategory === 'all'
      ? 'All Products'
      : `${transformedCategoryLabel} Products`

  return (
    <div className='mx-auto mb-24 mt-8 max-w-[1440px] px-4 sm:mt-12 sm:px-6 lg:px-8'>
      <FiltersButton onClick={toggleFilterSheet} />

      <div className='flex items-start gap-8'>
        <div className='hidden lg:block'>
          <FilterSidebar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            selectedPriceRanges={selectedPriceRanges}
            onPriceRangeChange={handlePriceRangeChange}
            isLoading={categoriesLoading}
          />
        </div>

        <div className='min-w-0 flex-1'>
          <div className='mb-6 flex items-center justify-between gap-2'>
            <h2 className='text-foreground text-lg font-semibold sm:text-xl'>
              {productsLoading ? 'Loading…' : categoryLabel}
            </h2>

            <SortAndView
              sort={sort}
              onSortChange={setSort}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </div>

          <ProductGrid
            products={visibleProducts}
            viewMode={viewMode}
            isLoading={productsLoading}
            isEmpty={filtered.length === 0}
          />

          {!productsLoading && hasMore && (
            <LoadMoreButton onLoadMore={handleLoadMore} />
          )}
        </div>
      </div>

      <FilterSheet
        open={isFilterSheetOpen}
        onOpenChange={setIsFilterSheetOpen}
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        selectedPriceRanges={selectedPriceRanges}
        onPriceRangeChange={handlePriceRangeChange}
        isLoading={categoriesLoading}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  )
}
