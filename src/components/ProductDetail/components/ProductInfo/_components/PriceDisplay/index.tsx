import type { PriceDisplayProps } from './types'

export default function PriceDisplay(props: PriceDisplayProps) {
  const { price, originalPrice } = props

  return (
    <div className='flex items-center gap-3'>
      <span
        className='text-foreground text-3xl font-semibold leading-9 tracking-[0.4px]'
        data-testid='product-price'
      >
        ${price.toFixed(2)}
      </span>
      {originalPrice && (
        <span
          className='text-xl leading-7 tracking-[-0.45px] text-[#94A3B8] line-through'
          data-testid='product-original-price'
        >
          ${originalPrice.toFixed(2)}
        </span>
      )}
    </div>
  )
}
