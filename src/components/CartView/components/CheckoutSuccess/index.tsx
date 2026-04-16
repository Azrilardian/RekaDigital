import { CheckCircle } from 'lucide-react'

export default function CheckoutSuccess() {
  return (
    <div className='mx-auto max-w-lg px-4 py-24 text-center'>
      <CheckCircle className='mx-auto mb-6 h-20 w-20 text-green-500' />
      <h2 className='mb-2 text-2xl font-bold text-slate-900'>
        Order Confirmed!
      </h2>
      <p className='mb-6 text-sm text-slate-500'>
        Thank you for your purchase. Your cart will be cleared shortly.
      </p>
    </div>
  )
}
