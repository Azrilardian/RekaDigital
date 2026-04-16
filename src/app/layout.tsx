import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import AppFooter from '@/components/AppFooter'
import { ReactNode } from 'react'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'ShopCatalog — Browse & Buy',
  description:
    'A modern shopping catalog powered by Next.js, Redux, and TanStack Query.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' className={`${inter.variable} h-full antialiased`}>
      <body className='flex min-h-full flex-col'>
        <Providers>
          <AnnouncementBar />
          <Navbar />
          <main className='flex-1 bg-white'>{children}</main>
          <AppFooter />
        </Providers>
      </body>
    </html>
  )
}
