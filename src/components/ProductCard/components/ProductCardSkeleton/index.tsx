export default function ProductCardSkeleton() {
  return (
    <div className='border-pale-gray shadow-xs group flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-200 hover:-translate-y-0.5'>
      {/* Image area */}
      <div className='h-[260px] w-full bg-slate-100' />

      {/* Body */}
      <div className='flex flex-1 flex-col gap-4 p-5'>
        {/* Stars */}
        <div className='flex gap-1'>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className='h-3.5 w-3.5 rounded-sm bg-slate-200' />
          ))}
        </div>

        {/* Title & Category */}
        <div>
          <div className='mb-2 h-4 w-4/5 rounded bg-slate-200' />
          <div className='mb-2 h-4 w-3/5 rounded bg-slate-200' />
          <div className='h-3 w-1/4 rounded bg-slate-200' />
        </div>

        {/* Description */}
        <div>
          <div className='mb-2 mt-1 h-3 w-full rounded bg-slate-100' />
          <div className='h-3 w-3/4 rounded bg-slate-100' />
        </div>

        {/* Price row */}
        <div className='mt-1 flex items-end justify-between border-t border-slate-100 pt-3'>
          <div className='space-y-1'>
            <div className='h-2.5 w-16 rounded bg-slate-200' />
            <div className='h-5 w-20 rounded bg-slate-200' />
          </div>
          <div className='h-6 w-14 rounded bg-slate-200' />
        </div>
      </div>
    </div>
  )
}
