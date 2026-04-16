import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'
import { StarRatingProps } from './types'

export default function StarRating(props: StarRatingProps) {
  const { rate } = props

  return (
    <div
      className='flex items-center gap-1'
      aria-label={`${rate} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          aria-hidden='true'
          className={cn(
            i < Math.round(rate)
              ? 'fill-yellow text-yellow'
              : 'fill-slate-200 text-slate-200'
          )}
        />
      ))}
    </div>
  )
}
