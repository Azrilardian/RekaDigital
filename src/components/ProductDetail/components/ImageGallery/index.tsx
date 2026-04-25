'use client'

import Image from 'next/image'

import ImageCounter from './_components/ImageCounter'
import NavigationButton from './_components/NavigationButton'
import type { ImageGalleryProps } from './types'
import { useImageGallery } from './useImageGallery'

export default function ImageGallery(props: ImageGalleryProps) {
  const { title, images } = props

  const { activeIndex, handlePrevious, handleNext, handleThumbnailClick } =
    useImageGallery({ images })

  return (
    <div className='space-y-4'>
      <div className='aspect-4/3 relative overflow-hidden rounded-2xl bg-[#F8F9FA]'>
        <Image
          src={images[activeIndex]}
          alt={`${title} - Image ${activeIndex + 1}`}
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          className='object-contain p-8'
          priority
        />

        <NavigationButton direction='previous' onClick={handlePrevious} />
        <NavigationButton direction='next' onClick={handleNext} />
        <ImageCounter current={activeIndex + 1} total={images.length} />
      </div>

      <div className='grid grid-cols-4 gap-3'>
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => handleThumbnailClick(idx)}
            aria-label={`View image ${idx + 1} of ${images.length}`}
            aria-current={activeIndex === idx ? 'true' : 'false'}
            className={`aspect-4/3 relative cursor-pointer overflow-hidden rounded-lg border-2 bg-[#F8F9FA] transition-all ${
              activeIndex === idx
                ? 'border-dark-blue-darker p-2'
                : 'border-transparent opacity-60 hover:border-gray-300'
            }`}
          >
            <Image
              src={img}
              alt={`${title} thumbnail ${idx + 1}`}
              fill
              sizes='200px'
              className='object-contain p-2'
            />
          </button>
        ))}
      </div>
    </div>
  )
}
