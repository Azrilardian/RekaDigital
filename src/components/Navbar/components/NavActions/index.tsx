import Link from 'next/link'
import { Search, User, Menu, Heart } from 'lucide-react'
import type { NavActionsProps } from './types'

const iconButtonClass =
  'p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors'

export default function NavActions(props: NavActionsProps) {
  const { itemCount } = props

  return (
    <div className='ml-auto flex items-center gap-1 md:ml-0'>
      <button aria-label='Search' className={iconButtonClass}>
        <Search size={20} color='#334155' />
      </button>
      <button aria-label='Account' className={iconButtonClass}>
        <User size={20} color='#334155' />
      </button>
      <Link
        href='/cart'
        aria-label='Cart'
        className={`relative ${iconButtonClass}`}
      >
        <Heart size={20} color='#334155' />
        {itemCount > 0 && (
          <span className='absolute right-0.5 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold leading-none text-white'>
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </Link>

      <button aria-label='Menu' className={`${iconButtonClass} md:hidden`}>
        <Menu size={20} color='#334155' />
      </button>
    </div>
  )
}
