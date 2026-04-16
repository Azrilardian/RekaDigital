import type { ImageCounterProps } from './types'

export default function ImageCounter(props: ImageCounterProps) {
  const { current, total } = props

  return (
    <div className='absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium leading-5 tracking-[-0.15px] text-white'>
      {current} / {total}
    </div>
  )
}
