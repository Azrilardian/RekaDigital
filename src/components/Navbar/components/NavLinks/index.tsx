import Link from 'next/link'
import type { NavLinksProps } from './types'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/inventory', label: 'Inventory' },
  { href: '/financing', label: 'Financing' },
  { href: '/contact', label: 'Contact' }
]

export default function NavLinks(props: NavLinksProps) {
  const { pathname } = props

  return (
    <nav className='hidden items-center gap-7 md:flex'>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`text-sm font-medium transition-colors hover:opacity-80 ${
            pathname === link.href ? 'text-dark-blue-darker' : 'text-slate-500'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
