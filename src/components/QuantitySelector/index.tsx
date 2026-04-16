'use client'

import { Minus, Plus } from 'lucide-react'
import type { QuantitySelectorProps } from './types'
import { useQuantitySelector } from './useQuantitySelector'

export default function QuantitySelector(props: QuantitySelectorProps) {
  const { value, onChange } = props

  const { handleDecrease, handleIncrease, handleInputChange } =
    useQuantitySelector({ value, onChange })

  return (
    <div className='border-pale-gray flex items-center overflow-hidden rounded-[10px] border'>
      <button
        onClick={handleDecrease}
        className='cursor-pointer px-3 py-4 transition-colors hover:bg-gray-50'
        aria-label='Decrease quantity'
      >
        <Minus size={16} className='text-slate-blue' />
      </button>
      <input
        type='number'
        value={value}
        onChange={handleInputChange}
        className='border-pale-gray flex w-14 items-center justify-center border-x py-2 text-center font-medium focus:outline-none'
      />
      <button
        onClick={handleIncrease}
        className='cursor-pointer px-3 py-4 transition-colors hover:bg-gray-50'
        aria-label='Increase quantity'
      >
        <Plus size={16} className='text-gray-600' />
      </button>
    </div>
  )
}
