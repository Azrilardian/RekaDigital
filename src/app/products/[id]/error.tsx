'use client'

import { useEffect } from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Product page error:', error)
  }, [error])

  return (
    <div className='mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8'>
      <div className='rounded-lg border border-red-200 bg-red-50 p-8'>
        <h2 className='text-foreground mb-3 text-2xl font-semibold'>
          Failed to Load Product
        </h2>
        <p className='text-slate-blue mb-6 text-sm'>
          We encountered an error while loading this product. Please try again
          or browse other products.
        </p>
        <div className='flex justify-center gap-3'>
          <Button
            onClick={reset}
            className='bg-dark-blue-darker hover:bg-dark-blue-darker/90 rounded-lg px-6 py-2 font-medium text-white'
          >
            Try Again
          </Button>
          <Link href='/'>
            <Button
              variant='outline'
              className='rounded-lg px-6 py-2 font-medium'
            >
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
