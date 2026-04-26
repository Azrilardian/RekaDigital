'use client'

import CategorySkeleton from './skeleton'
import { useCategoryList } from './useCategoryList'

export default function CategoryList() {
  const { categories, isLoading, category, updateCategoryParam } =
    useCategoryList()

  const allCategories = ['all', ...categories]

  if (isLoading) return <CategorySkeleton />

  return (
    <>
      <p className='text-foreground mb-4 text-sm font-semibold uppercase leading-5 tracking-[0.2px]'>
        Category
      </p>

      <ul className='space-y-1.5'>
        {allCategories.map((cat) => {
          const isActive = category === cat

          return (
            <li key={cat}>
              <button
                onClick={() => updateCategoryParam(cat)}
                className={`w-full cursor-pointer px-0 py-1.5 text-left text-sm font-medium capitalize tracking-[0.15px] transition-colors ${
                  isActive
                    ? 'text-dark-blue-darker border-dark-blue-darker border-b'
                    : 'text-slate-blue hover:text-dark-blue-darker'
                }`}
              >
                {cat === 'all' ? 'All Products' : cat}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
