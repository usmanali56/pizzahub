import React, { useEffect, useState } from 'react'
import img1 from '../../assets/img1.avif'
import img2 from '../../assets/img2.avif'
import img3 from '../../assets/img3.avif'

const items=[
    {
        image:img1,
        name:"Punny Pepperoni",
        price:"$22"
    },
     {
        image:img2,
        name:"Crispy Crust",
        price:"$20"
    },
     {
        image:img3,
        name:"Autumn Harvest ",
        price:"$23"
    },
    ]
const Menu = () => {
    const [currentImage,setCurrentImage]=useState(0)

    useEffect(() =>{
const interval=setInterval(()=>{
    setCurrentImage((prev)=>(prev +1)% items.length)
},5000)
return ()=>clearInterval(interval)
    },[])
  return (
    <div className='w-full mx-auto bg-[#f8ede1] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start'>
      <div className='w-full max-w-sm mx-auto lg:mx-0 lg:ml-20'>
        <img src={items[currentImage].image} alt="" className='w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-md object-cover' />
         <div className="flex justify-between items-center mt-4">
    <h3 className="text-lg sm:text-xl font-semibold">
      {items[currentImage].name}
    </h3>

    <span className="text-lg sm:text-xl font-bold text-orange-500">
      {items[currentImage].price}
    </span>
  </div>
      </div>

      {/* right */}
     <div className='text-center lg:text-left lg:pl-20'>
        <h6 className='text-base sm:text-lg md:text-xl text-gray-700'>Best Pizza</h6>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-3 sm:mt-4 leading-tight'>Freshly Baked Every Day</h1>
        <p className='text-sm sm:text-base text-gray-400 mt-3 sm:mt-4'>Smart, secure, and seamless property solutions for everyone.</p>
    
 <a href=""
  className="relative inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 mt-8 sm:mt-10 text-sm sm:text-base rounded-full bg-red-500 text-white border-2 border-red-500 overflow-hidden group"
>
  <span className="relative z-10 transition-colors duration-500 group-hover:text-red-500">
    Explore Menu
  </span>

  <span className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-500 group-hover:h-full"></span>
</a>
     </div>
    </div>
  )
}

export default Menu