import { productApi } from '@/services/api/product-api'
import type { Product } from '@/types'
import { handleGenericError } from '@/utils/error-handler'

function toFetchError(message: string, err: unknown): Error {
  if (err instanceof Error) return err
  return new Error(message)
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    return await productApi.getProducts()
  } catch (err: any) {
    handleGenericError(err)
    throw toFetchError('Failed to fetch products', err)
  }
}

export async function fetchProduct(id: number): Promise<Product> {
  try {
    return await productApi.getProduct(id)
  } catch (err: any) {
    handleGenericError(err)
    throw toFetchError(`Failed to fetch product ${id}`, err)
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    return await productApi.getCategories()
  } catch (err: any) {
    handleGenericError(err)
    throw toFetchError('Failed to fetch categories', err)
  }
}
