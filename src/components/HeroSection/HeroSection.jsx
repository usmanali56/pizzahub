import React from 'react'
import img from '../../assets/hero-img.avif'
const HeroSection = () => {
  return (
    <div className="bg-[#FFF6ED] overflow-hidden mt-[1px]">
      <div className="flex  h-160 animate-marquee gap-25">
  <img
    src={img}
    alt=""
    className=" flex-shrink-0"
  />
  <img
    src={img}
    alt=""
    className=" flex-shrink-0"
  />
</div>
    </div>
  )
}

export default HeroSection
