'use client'

import Link from 'next/link'

import NavActions from './components/NavActions'
import NavLinks from './components/NavLinks'
import { useNavbar } from './useNavbar'

export default function Navbar() {
  const { pathname, itemCount } = useNavbar()

  return (
    <header className='sticky top-0 z-50 bg-white shadow-sm'>
      <div className='mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4 lg:px-8'>
        <div className='flex items-center gap-10'>
          <Link
            href='/'
            className='text-dark-blue-darker hover:text-dark-blue-darker/70 shrink-0 text-lg font-bold tracking-tight transition-colors sm:text-xl'
          >
            AutoElite
          </Link>

          <NavLinks pathname={pathname} />
        </div>

        <NavActions itemCount={itemCount} />
      </div>
    </header>
  )
}
