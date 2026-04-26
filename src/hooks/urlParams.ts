import { useCallback, useEffect, useState } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'

import { ViewMode } from '@/components/CatalogView/types'

type UseUrlParamsOptions = {
  paramName: string
  defaultValue?: string
  replaceHistory?: boolean
}

type UseUrlParamsReturn = {
  currentValue: string
  updateParam: (value: string) => void
  resetToDefault: () => void
}

export function useUrlParams({
  paramName,
  defaultValue = '',
  replaceHistory = false
}: UseUrlParamsOptions): UseUrlParamsReturn {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const paramValue = searchParams.get(paramName) || defaultValue
  const [currentValue, setCurrentValue] = useState(paramValue)

  const updateParam = useCallback(
    (value: string) => {
      setCurrentValue(value)

      const params = new URLSearchParams(searchParams)
      if (value === defaultValue) {
        params.delete(paramName)
      } else {
        params.set(paramName, value)
        params.delete('page')
      }

      const newUrl = pathname + (String(params) ? '?' + String(params) : '')

      if (replaceHistory) {
        window.history.replaceState({}, '', newUrl)
      } else {
        window.history.pushState({}, '', newUrl)
      }
    },
    [pathname, searchParams, paramName, defaultValue, replaceHistory]
  )

  const resetToDefault = useCallback(() => {
    updateParam(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    setCurrentValue(paramValue)
  }, [paramValue])

  return {
    currentValue,
    updateParam,
    resetToDefault
  }
}

export function useSortParams(defaultSort = '') {
  return useUrlParams({
    paramName: 'sort',
    defaultValue: defaultSort,
    replaceHistory: true
  })
}

export function useViewModeParams(
  defaultViewMode: ViewMode = 'grid-3'
): UseUrlParamsReturn {
  return useUrlParams({
    paramName: 'viewMode',
    defaultValue: defaultViewMode,
    replaceHistory: true
  })
}

export function useCategoryParams(defaultCategory: string = 'all') {
  return useUrlParams({
    paramName: 'category',
    defaultValue: defaultCategory,
    replaceHistory: true
  })
}

export function usePriceRangeParams(defaultPriceRange: string = 'all') {
  return useUrlParams({
    paramName: 'priceRange',
    defaultValue: defaultPriceRange,
    replaceHistory: true
  })
}
