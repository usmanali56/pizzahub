import React from 'react'
import img from "../../assets/rotate img.png"
const Pizzapro = () => {
  return (
   <div className="relative w-full h-screen overflow-hidden bg-[#FDF4EC] flex items-center justify-center">
      {/* 3D Rotating Background Image Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <img
          src={img}
          alt="3D Rotating Element"
          className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] lg:w-[600px] lg:h-[600px] object-contain animate-rotate-3d"
        />
      </div>
      </div>
  )
}

export default Pizzapro