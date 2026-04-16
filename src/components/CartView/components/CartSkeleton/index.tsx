export default function CartSkeleton() {
  return (
    <div className='mx-auto max-w-5xl animate-pulse px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mb-8 h-8 w-48 rounded bg-slate-200' />
      <div className='grid gap-8 lg:grid-cols-3'>
        <div className='space-y-4 lg:col-span-2'>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className='h-28 rounded-lg bg-slate-100' />
          ))}
        </div>
        <div className='h-64 rounded-lg bg-slate-100' />
      </div>
    </div>
  )
}
