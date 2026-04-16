export default function Loading() {
  return (
    <div className='mx-auto flex min-h-[50vh] max-w-[1440px] items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <div className='border-dark-blue-darker mx-auto h-12 w-12 animate-spin rounded-full border-4 border-t-transparent'></div>
        <p className='text-slate-blue mt-4 text-sm'>Loading...</p>
      </div>
    </div>
  )
}
