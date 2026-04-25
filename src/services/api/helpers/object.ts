import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'

import { AnyObject, KeyConverter } from './object.types'

export const snakeCaseKeys: KeyConverter = (data): any => {
  if (!data) return data

  if (Array.isArray(data)) return data.map((item: any) => camelizeKeys(item))

  if (typeof data === 'object') {
    const result: AnyObject = {}

    Object.entries(data).forEach(([key, value]) => {
      const camelizedKey = snakeCase(key)

      if (!value) return

      if (Array.isArray(value)) {
        result[camelizedKey] = value.map((item: any) => camelizeKeys(item))
        return
      }

      if (typeof value === 'object') {
        result[camelizedKey] = camelizeKeys(value as AnyObject)
        return
      }

      result[camelizedKey] = value
    })

    return result
  }

  return data
}

export const camelizeKeys: KeyConverter = (data): any => {
  if (!data) return data

  if (Array.isArray(data)) return data.map((item: any) => camelizeKeys(item))

  if (typeof data === 'object') {
    const result: AnyObject = {}

    Object.entries(data).forEach(([key, value]) => {
      const camelizedKey = camelCase(key)

      if (!value) return

      if (Array.isArray(value)) {
        result[camelizedKey] = value.map((item: any) =>
          camelizeKeys(item as AnyObject)
        )
        return
      }

      if (typeof value === 'object') {
        result[camelizedKey] = camelizeKeys(value as AnyObject)
        return
      }

      result[camelizedKey] = value
    })

    return result
  }

  return data
}
