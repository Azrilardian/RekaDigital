import type { ProductMetaProps } from './types'
import AccordionSection from '../../../AccordionSection'

export default function ProductMeta(props: ProductMetaProps) {
  const { sku, vin, location } = props

  const metaItems = [
    { label: 'SKU', value: sku },
    { label: 'VIN', value: vin },
    { label: 'Location', value: location }
  ]

  return (
    <div className='space-y-0'>
      <div className='border-pale-gray grid grid-cols-1 gap-4 border-t py-4'>
        {metaItems.map((item) => (
          <div key={item.label} className='flex items-center justify-between'>
            <p className='text-slate-blue text-sm leading-5 tracking-[-0.15px]'>
              {item.label}:
            </p>
            <p className='text-foreground text-sm font-medium leading-5 tracking-[-0.15px]'>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className='border-pale-gray border-t'>
        <AccordionSection title='Additional Info' defaultOpen>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </p>
        </AccordionSection>
      </div>

      <div>
        <AccordionSection title='Details'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </p>
        </AccordionSection>
      </div>
    </div>
  )
}
