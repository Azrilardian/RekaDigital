'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { PRICE_RANGES } from '@/config/catalog-filters'

import { usePriceRangeList } from './usePriceRangeList'

export default function PriceRangeList() {
  const { priceRange, updatePriceRangeParam } = usePriceRangeList()

  return (
    <>
      <p className='text-foreground mb-4 text-sm font-semibold uppercase leading-5 tracking-[0.2px]'>
        Price Range
      </p>

      <ul className='space-y-3'>
        {PRICE_RANGES.map((range) => {
          const checked = priceRange.includes(range.id)

          return (
            <li key={range.id} className='flex items-center justify-between'>
              <label
                htmlFor={`price-${range.id}`}
                className='cursor-pointer select-none text-sm font-medium text-[#475569]'
              >
                {range.label}
              </label>
              <Checkbox
                id={`price-${range.id}`}
                checked={checked}
                onCheckedChange={() => updatePriceRangeParam(range.id)}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}
