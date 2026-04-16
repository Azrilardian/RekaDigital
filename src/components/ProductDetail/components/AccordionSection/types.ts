import { ReactNode } from 'react'

export interface AccordionSectionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}
