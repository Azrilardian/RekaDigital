'use client'

import { Button } from '@/components/ui/button'

import type { LoadMoreButtonProps } from './types'

export default function LoadMoreButton(props: LoadMoreButtonProps) {
  const { onLoadMore } = props

  return (
    <div className='mt-12 flex justify-center'>
      <Button
        variant='outline'
        onClick={onLoadMore}
        className='border-dark-blue-darker text-dark-blue-darker hover:bg-dark-blue-darker/5 w-full rounded-[10px] border-2 bg-transparent px-[34px] py-5 font-medium sm:w-auto'
      >
        Show More Vehicles
      </Button>
    </div>
  )
}
