import type { ProductCardDescriptionProps } from './types'

export default function ProductCardDescription(
  props: ProductCardDescriptionProps
) {
  const { description } = props

  return (
    <p className='text-slate-blue line-clamp-2 text-sm leading-5 tracking-[-0.15px]'>
      {description}
    </p>
  )
}
