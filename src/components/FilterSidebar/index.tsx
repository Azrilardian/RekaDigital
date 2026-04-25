'use client'

import { Funnel } from 'lucide-react'

import CategoryList from './components/CategoryList'
import CategorySkeleton from './components/CategorySkeleton'
import PriceRangeList from './components/PriceRangeList'
import type { FilterSidebarProps } from './types'

export default function FilterSidebar(props: FilterSidebarProps) {
  const {
    categories,
    activeCategory,
    onCategoryChange,
    selectedPriceRanges,
    onPriceRangeChange,
    isLoading
  } = props

  return (
    <aside className='w-[280px] shrink-0'>
      <div className='mb-8 flex items-center gap-2'>
        <Funnel size={16} className='text-dark-blue-darker' />
        <span className='text-foreground text-lg font-semibold'>Filters</span>
      </div>

      <section className='mb-8'>
        <p className='text-foreground mb-4 text-sm font-semibold uppercase leading-5 tracking-[0.2px]'>
          Category
        </p>

        {isLoading ? (
          <CategorySkeleton />
        ) : (
          <CategoryList
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
          />
        )}
      </section>

      <section>
        <p className='text-foreground mb-4 text-sm font-semibold uppercase leading-5 tracking-[0.2px]'>
          Price Range
        </p>
        <PriceRangeList
          selectedPriceRanges={selectedPriceRanges}
          onPriceRangeChange={onPriceRangeChange}
        />
      </section>
    </aside>
  )
}
