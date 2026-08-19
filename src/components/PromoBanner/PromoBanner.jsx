import React, { useEffect, useState } from 'react'
import bg from "../../assets/bg-img.avif"
const PromoBanner = () => {
    const[isVisible,setIsVisible]=useState(null)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIsVisible(true)
        },200)
        return ()=>clearTimeout(timer)
    },[])
  return (
    <div className="relative w-full h-[85vh] min-h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className='absolute inset-0 bg-black/20'></div>
      <div className={`relative z-10 w-[90%] max-w-md transition-all duration-700 cubic-bezier(0.34,1.56,0.64,1) transform ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10'
        }`}>
<div className="h-44 sm:h-52 w-full border-4 border-dashed border-white rounded-t-3xl bg-transparent"></div>
<div className="bg-white rounded-b-3xl p-8 text-center flex flex-col items-center justify-center shadow-2xl -mt-1 border-x-4 border-b-4 border-dashed border-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight leading-tight mb-6">
            ORDER NOW BEFORE <br /> ALL SELLS OUT.
          </h2>

          <button className="bg-[#c83200] hover:bg-[#a62900] text-white text-xs sm:text-sm font-bold tracking-wider px-8 py-3.5 rounded-full uppercase transition-transform duration-300 hover:scale-105">
            EXPLORE MENU
          </button>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner
