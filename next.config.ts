import type { NextConfig } from 'next'

import { API_CONFIG } from './src/config/constants'

const nextConfig: NextConfig = {
  experimental: {
    cssChunking: true
  },
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: API_CONFIG.IMAGE_HOSTNAME,
        pathname: '/img/**'
      }
    ]
  }
}

export default nextConfig
