import { ErrorStateProps } from './types'
import { Button } from '../ui/button'

export default function ErrorState(props: ErrorStateProps) {
  const { refetch, error } = props

  return (
    <div className='text-foreground py-24 text-center'>
      <p className='mb-1 text-lg font-medium'>{error?.message}</p>
      <p className='mb-4 mt-1 text-sm'>Try again later</p>
      <Button onClick={refetch}>Retry</Button>
    </div>
  )
}
