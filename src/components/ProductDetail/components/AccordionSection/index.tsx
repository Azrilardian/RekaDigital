'use client'

import { useState } from 'react'

import { ChevronRight } from 'lucide-react'

import type { AccordionSectionProps } from './types'

export default function AccordionSection(props: AccordionSectionProps) {
  const { title, children, defaultOpen = false } = props

  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className='border-b border-gray-200'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className='flex w-full items-center justify-between px-1 py-4 text-left transition-colors hover:bg-gray-50'
      >
        <span className='text-foreground text-sm font-medium leading-5 tracking-[-0.15px]'>
          {title}
        </span>
        <ChevronRight
          size={16}
          className={`text-foreground transition-transform ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div
          role='region'
          className='text-foreground px-4 pb-4 pt-2 text-sm leading-6 tracking-[-0.15px]'
        >
          {children}
        </div>
      )}
    </div>
  )
}
