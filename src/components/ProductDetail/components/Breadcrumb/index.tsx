import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import type { BreadcrumbProps } from './types'

export default function Breadcrumb(props: BreadcrumbProps) {
  const { items } = props

  return (
    <nav className='mb-6 flex items-center gap-2 text-xs sm:text-sm'>
      {items.map((item, idx) => (
        <div key={idx} className='flex items-center gap-2'>
          {idx > 0 && <ChevronRight size={16} className='text-slate-blue' />}
          {idx === items.length - 1 ? (
            <span className='text-dark-blue-darker font-medium leading-5 tracking-[-0.15px]'>
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className='text-slate-blue hover:text-dark-blue-darker leading-5 tracking-[-0.5px] transition-colors'
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
