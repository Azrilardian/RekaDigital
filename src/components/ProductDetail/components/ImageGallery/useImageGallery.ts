'use client'

import { useState } from 'react'

import type { ImageGalleryProps } from './types'

export function useImageGallery({ images }: Pick<ImageGalleryProps, 'images'>) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index)
  }

  return {
    activeIndex,
    handlePrevious,
    handleNext,
    handleThumbnailClick
  }
}
