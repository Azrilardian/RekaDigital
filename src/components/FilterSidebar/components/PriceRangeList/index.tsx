'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { PRICE_RANGES } from '@/config/catalog-filters'

import type { PriceRangeListProps } from './types'

export default function PriceRangeList(props: PriceRangeListProps) {
  const { selectedPriceRanges, onPriceRangeChange } = props

  return (
    <ul className='space-y-3'>
      {PRICE_RANGES.map((range) => {
        const checked = selectedPriceRanges.includes(range.id)

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
              onCheckedChange={(val) =>
                onPriceRangeChange(range.id, Boolean(val))
              }
            />
          </li>
        )
      })}
    </ul>
  )
}
