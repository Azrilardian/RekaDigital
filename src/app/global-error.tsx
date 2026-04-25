'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <html lang='en'>
      <body>
        <div className='flex min-h-screen flex-col items-center justify-center bg-white px-4'>
          <div className='text-center'>
            <h1 className='text-dark-blue-darker mb-4 text-4xl font-bold'>
              Something went wrong
            </h1>
            <p className='text-slate-blue mb-8 text-lg'>
              {error?.message ?? 'An unexpected error occurred'}
            </p>
            <button
              onClick={reset}
              className='bg-dark-blue-darker hover:bg-dark-blue-darker/90 rounded-lg px-6 py-3 text-white transition-colors'
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
