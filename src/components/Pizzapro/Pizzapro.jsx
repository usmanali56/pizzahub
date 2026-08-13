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
          className="w-[600px] h-[600px] object-contain animate-rotate-3d"
        />
      </div>
      </div>
  )
}

export default Pizzapro
