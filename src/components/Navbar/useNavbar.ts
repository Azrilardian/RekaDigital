'use client'

import { usePathname } from 'next/navigation'

import { useAppSelector } from '@/store/hooks'

export function useNavbar() {
  const pathname = usePathname()
  const itemCount = useAppSelector((s) =>
    s.cart.items.reduce((acc, i) => acc + i.quantity, 0)
  )

  return { pathname, itemCount }
}
