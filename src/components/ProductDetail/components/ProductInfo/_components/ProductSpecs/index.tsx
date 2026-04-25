import { Badge } from '@/components/ui/badge'

import type { ProductSpecsProps } from './types'

export default function ProductSpecs(props: ProductSpecsProps) {
  const { measurements, category } = props

  return (
    <div className='space-y-6'>
      <div>
        <p className='text-foreground mb-2 text-sm font-semibold leading-5 tracking-[-0.15px]'>
          Measurements
        </p>
        <p className='text-slate-blue text-sm leading-5 tracking-[-0.15px]'>
          {measurements}
        </p>
      </div>

      <div>
        <p className='text-foreground mb-2 text-sm font-semibold leading-5 tracking-[-0.15px]'>
          Category
        </p>
        <div className='flex gap-2'>
          {category.split(',').map((cat, idx) => (
            <Badge
              key={idx}
              variant='secondary'
              className='text-dark-blue-darker px-4.5 rounded-[10px] border border-[#E5E7EB] bg-[#F1F5F9] py-2.5 text-sm font-semibold leading-5 tracking-[-0.15px]'
            >
              {cat.trim()}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
