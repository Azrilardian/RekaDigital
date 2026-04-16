'use client'

import { ChevronDown, Grid2X2, Grid3X3, List } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { SORT_OPTIONS } from '@/config/catalog-filters'
import type { SortOption, ViewMode } from '../../types'
import type { SortAndViewProps } from './types'

export default function SortAndView(props: SortAndViewProps) {
  const { sort, onSortChange, viewMode, onViewModeChange } = props

  const viewModes = [
    { mode: 'grid-3' as ViewMode, icon: Grid3X3, label: '3 column grid' },
    { mode: 'grid-2' as ViewMode, icon: Grid2X2, label: '2 column grid' },
    { mode: 'list' as ViewMode, icon: List, label: 'List view' }
  ]

  return (
    <div className='flex items-center gap-3 sm:gap-6'>
      <div className='flex items-center gap-2 sm:gap-3'>
        <span className='text-foreground hidden text-sm font-medium sm:inline'>
          Sort by
        </span>
        <Select
          value={sort}
          onValueChange={(val) => onSortChange(val as SortOption)}
        >
          <SelectTrigger className='h-auto w-auto cursor-pointer border-none bg-transparent p-0 text-sm font-normal shadow-none focus:ring-0 focus:ring-offset-0 [&>svg]:hidden'>
            <div className='flex items-center gap-1 sm:gap-2'>
              <SelectValue />
              <ChevronDown size={16} className='text-slate-blue' />
            </div>
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='border-pale-gray flex items-center gap-0.5 rounded-lg border sm:gap-1'>
        {viewModes.map(({ mode, icon: Icon, label }) => (
          <button
            key={mode}
            onClick={() => onViewModeChange(mode)}
            aria-label={label}
            className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition-all sm:h-9 sm:w-9 ${
              mode === 'list' ? 'hidden sm:flex' : ''
            } ${
              viewMode === mode
                ? 'bg-[#F1F5F9]'
                : 'hover:text-slate-blue text-[#94A3B8]'
            }`}
          >
            <Icon size={16} className='text-dark-blue-darker' />
          </button>
        ))}
      </div>
    </div>
  )
}
