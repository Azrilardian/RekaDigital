import { useQuery } from '@tanstack/react-query'

import { useCategoryParams } from '@/hooks/urlParams'
import { fetchCategories } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'

export function useCategoryList() {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: queryKeys.categories,
    queryFn: fetchCategories
  })

  const { currentValue: category, updateParam: updateCategoryParam } =
    useCategoryParams()

  return {
    categories,
    isLoading,
    category,
    updateCategoryParam
  }
}
