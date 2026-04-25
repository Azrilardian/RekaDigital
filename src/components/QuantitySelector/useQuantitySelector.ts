import { ChangeEvent } from 'react'

import type { QuantitySelectorProps } from './types'

export function useQuantitySelector({
  value,
  onChange
}: Pick<QuantitySelectorProps, 'value' | 'onChange'>) {
  const handleDecrease = () => {
    if (value > 1) onChange(value - 1)
  }

  const handleIncrease = () => {
    onChange(value + 1)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Math.max(1, parseInt(e.target.value) || 1))
  }

  return {
    handleDecrease,
    handleIncrease,
    handleInputChange
  }
}
