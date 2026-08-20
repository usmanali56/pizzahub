import React from 'react'
import img from '../../assets/hero-img.avif'
const HeroSection = () => {
  return (
    <div className="bg-[#FFF6ED] overflow-hidden mt-[1px]">
      <div className="flex h-52 sm:h-72 md:h-96 lg:h-128 xl:h-160 animate-marquee gap-6 sm:gap-12 md:gap-16 lg:gap-25">
        <img
          src={img}
          alt=""
          className="h-full w-auto flex-shrink-0"
        />
        <img
          src={img}
          alt=""
          className="h-full w-auto flex-shrink-0"
        />
      </div>
    </div>
  )
}

export default HeroSection