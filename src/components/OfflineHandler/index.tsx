import { ReactNode, useEffect, useRef } from 'react'

import { toast } from 'sonner'

import { useOnline } from '@/hooks/useOnline'

export default function OfflineHandler(): ReactNode {
  const isOnline = useOnline()

  const wasOnline = useRef(isOnline)

  useEffect(() => {
    if (wasOnline.current === isOnline) return

    if (isOnline) toast.success('You are back online.')
    else toast.error('You are offline.')

    wasOnline.current = isOnline
  }, [isOnline])

  return null
}
