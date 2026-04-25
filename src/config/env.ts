export const IS_PROD = process.env.NODE_ENV === 'production'
export const IS_DEV = process.env.NODE_ENV === 'development'
export const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://fakestoreapi.com'
export const LANGUAGE_STORAGE_KEY = 'LOCALE'
export const ACCESS_TOKEN_STORAGE_KEY = 'ACCESS_TOKEN'
export const PROJECT_NAME = 'Shop Catalog'
export const WEBSITE_URL = ''
