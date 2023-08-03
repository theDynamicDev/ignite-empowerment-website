'use client'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import React from 'react'
import Image from 'next/image'




const SlideShow = ({isOpen, close, data}) => {

 
  React.useEffect(() => {
   
    initLightboxJS('7ACF-5C89-7F26-30C8', 'Individual')
  })


 

  
  // const images = await getGallery();
  //  const imageAssets = images.map(item => item.image.asset.url);
  // console.log(imageAssets);
 


  // const images = [
  //   {
  //     src: 'https://github.com/theDynamicDev/ignite-empowerment-website/assets/86843762/c678d7d5-b1c3-4fb2-a732-a678103ca773',
  //     alt: 'Recognition Event',
  //   },
  //   {
  //     src: 'https://github.com/theDynamicDev/ignite-empowerment-website/assets/86843762/83df80f3-a660-4030-b880-ce5c3e4f538f',
  //     alt: 'Self Introductions',
  //   },
  //   {
  //     src: 'https://github.com/theDynamicDev/ignite-empowerment-website/assets/86843762/ceb5a105-0f60-4a14-801c-16db02e08f0e',
  //     alt: 'Florida League of Cities Youth Council Event',
  //   },
  // ]


//  console.log('FROM SLIDE SHOW', data);
 const imageUrls = data.data;
  // console.log('Image URLs: ', imageUrls);

  return (
    <div className="flex flex-col justify-center top-32 md:top-12  items-center space-y-0  relative ">
      <SlideshowLightbox
        lightboxIdentifier="lightbox1"
        framework="next"
        modalClose={'clickOutside'}
        images={imageUrls.map(imageUrl => ({src: imageUrl}))}
        slideshowInterval={1600}
        imgAnimation="fade"
        fullScreen={true}
        thumbnailBorder="yellow"
        iconColor="green"
        open={isOpen}
        className="shadow-lg shadow-cyan-400/10 overflow-x-hidden max-h-[70%] md:max-h-full lg:max-h-full space-y-4 z-40 md:space-x-4 md:space-y-0 flex  md:flex-row flex-col mx-auto "
        onClose={close}
      >
        {imageUrls.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt="Ignite Empowerment Gallery Image"
            height={500}
            width={500}
            data-lightboxjs="lightbox1"
            quality={80}
            className="object-cover container drop-shadow-lg drop-shadow-cyan-400 ring-1 ring-gray-800 shadow-white/20 shadow-lg rounded"
          />
        ))}
      </SlideshowLightbox>
    </div>
  )
}

export default SlideShow
