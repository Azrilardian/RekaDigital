'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewsletterSection() {
  return (
    <section className='bg-background px-4 py-16'>
      <div className='mx-auto max-w-xl text-center'>
        <h2 className='text-foreground mb-6 text-3xl font-semibold leading-8 tracking-[0.4px]'>
          Stay Updated
        </h2>
        <p className='text-slate-blue mb-6'>
          Subscribe to receive notifications about new inventory and special
          offers
        </p>

        <form className='mx-auto flex flex-col justify-center gap-3 sm:flex-row'>
          <Input
            name='email'
            type='email'
            placeholder='Email address'
            required
            className='h-12 w-full rounded-[10px] border-[#CBD5E1] bg-transparent shadow-none md:max-w-[314px]'
            autoComplete='email'
          />
          <Button
            type='submit'
            className='bg-dark-blue-darker hover:bg-dark-blue-darker/90 h-12 w-full shrink-0 rounded-[10px] px-6 font-semibold tracking-[0.3px] text-white sm:w-auto'
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
