import { EmptyStateProps } from './types'

export default function EmptyState(props: EmptyStateProps) {
  const {
    title = 'No results found',
    message = 'Try adjusting your search or filters'
  } = props

  return (
    <div className='text-foreground py-24 text-center'>
      <p className='text-lg font-medium'>{title}</p>
      <p className='mt-1 text-sm'>{message}</p>
    </div>
  )
}
