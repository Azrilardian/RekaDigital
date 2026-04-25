'use client'

import { ReactNode } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { getQueryClient } from '@/lib/get-query-client'
import { persistor, store } from '@/store/store'

import OfflineHandler from '../OfflineHandler'
import { Toaster } from '../ui/sonner'

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PersistGate>
      <Toaster />
      <OfflineHandler />
    </Provider>
  )
}
