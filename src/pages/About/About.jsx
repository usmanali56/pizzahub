import React from 'react'
import img1 from "../../assets/hero1-about.avif"
import img2 from "../../assets/Hero2-about.avif"
import Service from '../../components/Service/Service'
import Features from './Features'
import PromoBanner from '../../components/PromoBanner/PromoBanner'

const About = () => {
  return (
    <>
    <div className='relative w-full min-h-screen bg-gradient-to-br from-[#fdeedd] via-[#fef6ec] to-[#fdeedd] overflow-hidden flex items-center justify-center px-4 py-16 lg:py-0'>
      
      <img 
        src={img1} 
        alt="" 
        className='hidden lg:block absolute left-6 xl:left-16 top-1/2 -translate-y-1/2 w-56 xl:w-64 h-80 xl:h-96 object-cover rounded-3xl shadow-lg' 
      />

      <img 
        src={img2} 
        alt="" 
        className='hidden lg:block absolute right-6 xl:right-16 top-1/2 -translate-y-1/2 w-56 xl:w-64 h-80 xl:h-96 object-cover rounded-3xl shadow-lg' 
      />
      {/* Center content */}
      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        <p className='text-sm sm:text-base font-semibold tracking-widest uppercase text-gray-800 mb-4 sm:mb-6'>
          About
        </p>

        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.05] text-black tracking-tight'>
          Born In Tradition, <br />
          Baked For The Bold
        </h1>

        <p className='text-sm sm:text-base md:text-lg text-gray-600 mt-6 sm:mt-8 max-w-xl mx-auto'>
          Smart, secure, and seamless property solutions for everyone.
        </p>

        <button className='mt-8 sm:mt-10 bg-[#c83200] hover:bg-[#a62900] text-white font-bold tracking-wider text-xs sm:text-sm uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-colors'>
          Contact Us
        </button>
      </div>

    </div>
<Service />
<Features />
<PromoBanner />
    </>
  )
}

export default About