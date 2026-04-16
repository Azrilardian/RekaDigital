export default function ProductDetailSkeleton() {
  return (
    <div className='mx-auto max-w-[1440px] animate-pulse px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mb-8 h-5 w-48 rounded bg-gray-200' />
      <div className='grid gap-12 lg:grid-cols-2'>
        <div className='space-y-4'>
          <div className='h-[400px] rounded-2xl bg-gray-200' />
          <div className='grid grid-cols-4 gap-3'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='h-24 rounded-lg bg-gray-200' />
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='h-8 w-3/4 rounded bg-gray-200' />
          <div className='h-20 rounded bg-gray-200' />
          <div className='h-12 rounded-xl bg-gray-200' />
        </div>
      </div>
    </div>
  )
}
