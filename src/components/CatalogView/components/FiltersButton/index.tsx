'use client'

import { Funnel } from 'lucide-react'

import type { FiltersButtonProps } from './types'

export default function FiltersButton(props: FiltersButtonProps) {
  const { onClick } = props

  return (
    <button
      onClick={onClick}
      className='mb-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border-2 border-slate-300 bg-white px-4 py-3 font-medium transition-colors hover:bg-slate-50 lg:hidden'
    >
      <Funnel size={20} className='text-dark-blue-darker' />
      <span className='text-foreground'>Filters & Sort</span>
    </button>
  )
}
