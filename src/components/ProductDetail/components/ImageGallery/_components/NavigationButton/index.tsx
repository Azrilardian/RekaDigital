import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

import type { NavigationButtonProps } from './types'

export default function NavigationButton(props: NavigationButtonProps) {
  const { direction, onClick } = props

  const Icon = direction === 'previous' ? ChevronLeft : ChevronRight
  const position = direction === 'previous' ? 'left-4' : 'right-4'

  return (
    <Button
      onClick={onClick}
      className={`absolute ${position} top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200`}
      aria-label={`${direction === 'previous' ? 'Previous' : 'Next'} image`}
    >
      <Icon size={16} className='text-dark-blue-darker' />
    </Button>
  )
}
