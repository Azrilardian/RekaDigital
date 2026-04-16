import type { NextConfig } from 'next'
import { API_CONFIG } from './src/config/constants'

const nextConfig: NextConfig = {
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
