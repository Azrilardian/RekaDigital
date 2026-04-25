import { useSyncExternalStore } from 'react'

const subscribe = (callback: () => void) => {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)

  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

const getCurrentValue = () => {
  return navigator.onLine
}

export const useOnline = () => {
  const isOnline = useSyncExternalStore(subscribe, getCurrentValue, () => true)

  return isOnline
}
