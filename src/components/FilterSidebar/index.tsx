'use client'

import { Funnel } from 'lucide-react'

import CategoryList from './components/CategoryList'
import PriceRangeList from './components/PriceRangeList'

export default function FilterSidebar() {
  return (
    <aside className='w-[280px] shrink-0'>
      <div className='mb-8 flex items-center gap-2'>
        <Funnel size={16} className='text-dark-blue-darker' />
        <span className='text-foreground text-lg font-semibold'>Filters</span>
      </div>

      <section className='mb-8'>
        <CategoryList />
      </section>

      <section>
        <PriceRangeList />
      </section>
    </aside>
  )
}
