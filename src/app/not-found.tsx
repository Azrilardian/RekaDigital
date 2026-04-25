import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8'>
      <h1 className='text-foreground mb-4 text-6xl font-bold'>404</h1>
      <h2 className='text-foreground mb-3 text-2xl font-semibold'>
        Page Not Found
      </h2>
      <p className='text-slate-blue mb-8 text-base'>
        Sorry, we couldn&apos;t find the page you&apos;re looking for. The page
        might have been moved or deleted.
      </p>
      <Link href='/'>
        <Button className='bg-dark-blue-darker hover:bg-dark-blue-darker/90 rounded-lg px-6 py-3 font-medium text-white'>
          Back to Home
        </Button>
      </Link>
    </div>
  )
}
