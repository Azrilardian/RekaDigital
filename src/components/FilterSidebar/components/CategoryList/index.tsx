'use client'

import type { CategoryListProps } from './types'

export default function CategoryList(props: CategoryListProps) {
  const { categories, activeCategory, onCategoryChange } = props

  const allCategories = ['all', ...categories]

  return (
    <ul className='space-y-1.5'>
      {allCategories.map((cat) => {
        const isActive = activeCategory === cat

        return (
          <li key={cat}>
            <button
              onClick={() => onCategoryChange(cat)}
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
  )
}
