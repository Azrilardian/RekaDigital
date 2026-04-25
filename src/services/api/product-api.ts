import type { Product } from '@/types'

import { ApiCore } from './api-core'

export class ProductApi extends ApiCore {
  async getProducts(): Promise<Product[]> {
    const res = await this.get({ path: 'products' })
    return res.data as Product[]
  }

  async getProduct(productId: number | string): Promise<Product> {
    const res = await this.get({ path: `products/${productId}` })
    return res.data as Product
  }

  async getCategories(): Promise<string[]> {
    const res = await this.get({ path: 'products/categories' })
    return res.data as string[]
  }
}

export const productApi = new ProductApi()
