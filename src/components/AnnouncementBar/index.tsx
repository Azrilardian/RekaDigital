'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, X } from 'lucide-react'

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className='text-dark-blue border-pale-gray border-b bg-[#F8F9FA] text-xs sm:text-sm'>
      <div className='mx-auto flex max-w-[1440px] items-center justify-center px-4 py-3 sm:px-6 lg:px-8'>
        <div className='flex w-full items-center justify-center'>
          <button
            onClick={() => setDismissed(true)}
            className='mr-3 flex h-4 w-4 cursor-pointer items-center justify-center transition-colors'
            aria-label='Dismiss announcement'
          >
            <X size={14} />
          </button>
          <p className='text-center'>
            <span className='font-semibold'>Premium Selection</span>
            <span className='mx-2'>—</span>
            <span>Certified Pre-Owned Vehicles</span>
          </p>
          <Link
            href='/'
            className='text-dark-blue hover:text-dark-blue/70 ml-3 flex items-center gap-0.5 font-medium transition-colors'
          >
            Browse Inventory
            <ChevronRight size={16} className='text-dark-blue-darker' />
          </Link>
        </div>
      </div>
    </div>
  )
}
