import { AtSign, Rss, Share2 } from 'lucide-react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'Inventory' },
  { href: '/', label: 'Financing' },
  { href: '/', label: 'Blog' },
  { href: '/', label: 'Contact' }
]

const SOCIAL_LINKS = [
  { href: '#', icon: Share2, label: 'Share' },
  { href: '#', icon: AtSign, label: 'Contact' },
  { href: '#', icon: Rss, label: 'RSS Feed' }
]

export default function AppFooter() {
  return (
    <footer className='bg-foreground'>
      <div className='mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8'>
        <div className='flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left'>
          <div className='flex flex-col items-center gap-2 md:items-start'>
            <span className='text-xl font-semibold leading-7 tracking-[-0.45px] text-white'>
              AutoElite
            </span>
            <span className='text-sm text-[#94A3B8]'>
              © {new Date().getFullYear()} AutoElite. All rights reserved.
            </span>
          </div>

          <nav className='flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-8'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='text-sm leading-5 tracking-[-0.15px] text-[#94A3B8] transition-colors hover:text-white'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className='flex items-center gap-3 sm:gap-4'>
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className='bg-dark-blue hover:bg-dark-blue/80 flex h-9 w-9 items-center justify-center rounded-full transition-colors'
                >
                  <Icon size={16} className='text-white' />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
