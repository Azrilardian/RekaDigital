'use client'

import CategoryList from '@/components/FilterSidebar/components/CategoryList'
import CategorySkeleton from '@/components/FilterSidebar/components/CategorySkeleton'
import PriceRangeList from '@/components/FilterSidebar/components/PriceRangeList'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'

import type { FilterSheetProps } from './types'

export default function FilterSheet(props: FilterSheetProps) {
  const {
    open,
    onOpenChange,
    categories,
    activeCategory,
    onCategoryChange,
    selectedPriceRanges,
    onPriceRangeChange,
    isLoading,
    onApplyFilters
  } = props

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side='bottom' className='h-[85vh] overflow-y-auto'>
        <SheetHeader>
          <SheetTitle className='text-left text-xl font-semibold'>
            Filters & Sort
          </SheetTitle>
        </SheetHeader>

        <div className='mt-6 space-y-6'>
          <section>
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
        </div>

        <SheetFooter className='mt-8 flex-row gap-3'>
          <Button
            variant='outline'
            onClick={() => {
              onCategoryChange('all')
              selectedPriceRanges.forEach((id) => onPriceRangeChange(id, false))
            }}
            className='flex-1 rounded-[10px] border-2'
          >
            Clear All
          </Button>
          <Button
            onClick={onApplyFilters}
            className='bg-dark-blue-darker hover:bg-dark-blue-darker/90 flex-1 rounded-[10px] font-semibold text-white'
          >
            Apply Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
