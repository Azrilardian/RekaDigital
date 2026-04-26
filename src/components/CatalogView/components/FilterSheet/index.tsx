'use client'

import CategoryList from '@/components/FilterSidebar/components/CategoryList'
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
import { useFilterSheet } from './useFilterSheet'

export default function FilterSheet(props: FilterSheetProps) {
  const { open, onOpenChange, onApplyFilters } = props

  const { handleClearAll } = useFilterSheet()

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
            <CategoryList />
          </section>

          <section>
            <PriceRangeList />
          </section>
        </div>

        <SheetFooter className='mt-8 flex-row gap-3'>
          <Button
            variant='outline'
            onClick={handleClearAll}
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
