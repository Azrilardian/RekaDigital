export default function HeroSection() {
  return (
    <section className='relative h-64 w-full overflow-hidden bg-slate-800 sm:h-72 md:h-[420px]'>
      <div className='bg-linear-to-b absolute inset-0 from-slate-900/70 via-slate-800/60 to-slate-900/80' />

      <div className='relative z-10 flex h-full flex-col items-center justify-center px-4 text-center'>
        <h1 className='mb-3 text-3xl font-semibold tracking-tight text-white sm:mb-4 sm:text-4xl md:text-5xl'>
          Vehicle Marketplace
        </h1>

        <p className='text-light-gray max-w-[560px] px-4 text-base leading-6 tracking-[-0.45px] sm:px-0 sm:text-lg md:text-xl md:leading-7'>
          Find your perfect vehicle from our premium selection of certified
          automobiles.
        </p>
      </div>
    </section>
  )
}
