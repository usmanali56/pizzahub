import React, { useState } from 'react'
import img1 from "../../assets/slider1.avif"
import img2 from "../../assets/slider2.avif"
import img3 from "../../assets/slider3.avif"
import bg from "../../assets/slide-img.avif"
const testimonials=[
    {
        id:1,
        name:"FUCHSIA DUNLOP",
        location:"SHANGHAI",
        desc:"The ambiance is perfect, and the dishes are truly a work of art. This is my go-to spot for date nights and special occasions. Highly recommend!",
        img:img1,
        rating:5
    },
     {
        id:2,
        name:"SOPHIA BENNET",
        location:"BEIJING",
        desc:"The pizzas are always fresh, flavorful, and perfectly baked. Every visit feels special, and the service consistently exceeds expectations. A place I happily recommend!",
        img:img2,
        rating:5
    },
     {
        id:3,
        name:"OLIVIA CARTER",
        location:"TORONTO",
        desc:"From the crispy crust to the premium toppings, every bite is outstanding. The quality and atmosphere keep me coming back with friends and family!",
        img:img3,
        rating:5
    }
]
const TestimonialSlider = () => {
    const[currentIndex, setCurrentIndex]=useState(0)
    const prewSlide = ()=>{
        setCurrentIndex((prev)=>(prev === 0 ?testimonials.length-1:prev-1))
    }
    const nextSlide =()=>{
        setCurrentIndex((prev)=>(prev === testimonials.length-1?0:prev+1))
    }
    const{name,location,desc,img,rating}=testimonials[currentIndex]
  return (
    <div className='relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center py-16 px-4'
    style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main content container */}
      <div className='relative z-10 flex items-center justify-center w-full max-w-4xl gap-4 md:gap-8'>
{/* left navigation arrow */}
<button onClick={prewSlide} className='w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#d83a12] shadow-lg hover:scale-110 transition-transform cursor-pointer shrink-0 text-xl font-bold'>
&#10094;
</button>
{/* testimonials card */}
<div className='flex flex-col md:flex-row w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-white'>
    {/* left side content */}
<div className='w-full md:w-1/2 bg-[#d83a12] p-4 md:p-6 flex items-center justify-center'>
<div className='w-full h-72 md:h-80 overflow-hidden rounded-xl border-4 border-[#c0310e]'>
<img src={img} alt={name} />
</div>
</div>
{/* right side content */}
<div className='w-full md:w-1/2 bg-white p-8 md:p-10 flex flex-col justify-between text-center items-center'>
<div className='text-[#d83a12] font-serif text-6xl font-bold leading-none select-none'>
&ldquo;&ldquo;
</div>
<p className='text-gray-700 italic font-serif text-base md:text-lg leading-relaxed my-4'>
    {desc}
</p>
<div className='mt-2 flex flex-col items-center'>
    <div className='flex gap-1 text-[#d83a12] text-lg mb-2'>
{[...Array(rating)].map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
    </div>
<h4 className='font-bold text-gray-900 tracking-wider uppercase text-sm'>
{name}
</h4>
<p className='text-xs text-gray-500 tracking-widest mt-1 uppercase font-medium'>{location}</p>
</div>
</div>
</div>
<button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#d83a12] shadow-lg hover:scale-110 transition-transform cursor-pointer shrink-0 text-xl font-bold"
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}

export default TestimonialSlider
