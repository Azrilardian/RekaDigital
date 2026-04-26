import type { CategorySkeletonProps } from './types'

export default function CategorySkeleton(props: CategorySkeletonProps) {
  const { count = 5 } = props

  return (
    <div className='space-y-2.5'>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className='h-4 w-3/4 animate-pulse rounded bg-slate-100' />
      ))}
    </div>
  )
}
