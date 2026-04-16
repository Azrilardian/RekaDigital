import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { AddToCartButtonProps } from './types'
import { getButtonState } from './utils'

export default function AddToCartButton(props: AddToCartButtonProps) {
  const { onAddToCart, added = false, inCart = false } = props

  const buttonState = getButtonState(added, inCart)
  const Icon = buttonState.icon

  return (
    <Button
      onClick={onAddToCart}
      disabled={added}
      className={cn(
        'h-12 w-full shrink-0 rounded-[10px] px-6 font-semibold tracking-[0.3px] text-white transition-all duration-200',
        buttonState.className
      )}
    >
      <Icon className='mr-2 h-4 w-4' /> {buttonState.text}
    </Button>
  )
}
