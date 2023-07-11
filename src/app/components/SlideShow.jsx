'use client'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import React from 'react'
import Image from 'next/image'
const SlideShow = ({isOpen, close}) => {
  React.useEffect(() => {
    initLightboxJS('7ACF-5C89-7F26-30C8', 'Individual')
  })

  const images = [
    {
      src: 'https://source.unsplash.com/sQZ_A17cufs/549x711',
      alt: 'Mechanical keyboard with white keycaps.',
    },
    {
      src: 'https://source.unsplash.com/rsAeSMzOX9Y/768x512',
      alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
    },
    {
      src: 'https://source.unsplash.com/Z6SXt1v5tP8/768x512',
      alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
    },
  ]

  return (
    <div className="flex flex-col justify-center top-32 md:top-12  items-center space-y-0  relative ">
      <SlideshowLightbox
        lightboxIdentifier="lightbox1"
        framework="next"
        modalClose={'clickOutside'}
        images={images}
        slideshowInterval={1600}
        imgAnimation="fade"
        fullScreen={true}
        thumbnailBorder="yellow"
        iconColor="green"
        open={isOpen}
        className="  container shadow-xl shadow-cyan-400/20 overflow-x-hidden max-h-[70%] md:max-h-full lg:max-h-full space-y-4 z-40 md:space-x-4 md:space-y-0 flex  md:flex-row flex-col mx-auto "
        onClose={close}
      >
        {images.map((image) => (
          <Image
            src={image.src}
            alt={image.alt}
            height={500}
            width={500}
            data-lightboxjs="lightbox1"
            quality={80}
            className="w-full drop-shadow-lg drop-shadow-cyan-400 ring-1 ring-gray-800 shadow-white/20 shadow-lg rounded"
          />
        ))}
      </SlideshowLightbox>
    </div>
  )
}

export default SlideShow
