'use client'

import { Funnel } from 'lucide-react'

import { Button } from '@/components/ui/button'

import type { FiltersButtonProps } from './types'

export default function FiltersButton(props: FiltersButtonProps) {
  const { onClick } = props

  return (
    <Button
      onClick={onClick}
      variant='outline'
      className='mb-6 flex w-full items-center justify-center gap-2 lg:hidden'
    >
      <Funnel size={20} className='text-dark-blue-darker' />
      <span className='text-foreground'>Filters & Sort</span>
    </Button>
  )
}
