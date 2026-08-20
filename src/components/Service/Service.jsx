import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/left-img.avif'
import img2 from '../../assets/right-img.avif'
const Counter = ({ target, duration = 1500, suffix = '', className = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()

          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // ease-out for a nicer finish
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const Service = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdf6ec]">
      {/* Checkerboard strip — 2 full rows of squares */}
      <div
        className="w-full"
        style={{
          height: "96px", // 2 rows x 48px each
          backgroundColor: "#fdf6ec",
          backgroundImage:
            "repeating-conic-gradient(#c8371c 0% 25%, #fdf6ec 0% 50%)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Solid red section below the checker strip */}
      <div className="w-full bg-[#c8371c] py-12 sm:py-16 lg:py-20 text-[#fdf6ec] min-h-screen">
        <div className='container mx-auto px-4'>
          <h5 className='text-base sm:text-lg lg:text-xl text-center text-white'>BEHIND THE SLICE</h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white leading-tight whitespace-pre-line mt-4 sm:mt-6 lg:mt-8">
{`Serving Delicious Moments
with every Slice`}
          </h1>
          <div className='relative mt-8 sm:mt-10 lg:mt-14 flex items-center justify-center'>
            {/* left side - hidden on mobile/tablet, shown on large screens */}
            <img src={img1} alt="" className='hidden lg:block absolute left-10 xl:left-30 w-52 xl:w-72 rounded-md mt-10' />

            {/* center content */}
            <div className='w-full max-w-xl z-10 text-center flex flex-col justify-between gap-4 sm:gap-6 lg:gap-10'>
              <div className='w-full sm:w-[400px] mx-auto flex items-center justify-between shadow-md bg-white rounded-2xl h-16 sm:h-20'>
                <Counter target={10000} suffix="+" className='text-black p-2 sm:p-3 text-3xl sm:text-4xl lg:text-6xl' />
                <p className='text-sm sm:text-base lg:text-xl text-gray-500 p-2 sm:p-3'>Pizzas Served</p>
              </div>

              <div className='w-full sm:w-[400px] mx-auto flex items-center justify-between shadow-md bg-white rounded-2xl h-16 sm:h-20'>
                <Counter target={5000} suffix="+" className='text-black p-2 sm:p-3 text-3xl sm:text-4xl lg:text-6xl' />
                <p className='text-sm sm:text-base lg:text-xl text-gray-500 p-2 sm:p-3'>Happy Customers</p>
              </div>

              <div className='w-full sm:w-[400px] mx-auto flex items-center justify-between shadow-md bg-white rounded-2xl h-16 sm:h-20'>
                <Counter target={15} suffix="+" className='text-black p-2 sm:p-3 text-3xl sm:text-4xl lg:text-6xl' />
                <p className='text-sm sm:text-base lg:text-xl text-gray-500 p-2 sm:p-3'>Expert Chefs</p>
              </div>
            </div>

            {/* right image - hidden on mobile/tablet, shown on large screens */}
            <img src={img2} alt="" className='hidden lg:block absolute right-10 xl:right-30 w-52 xl:w-64 rounded-md mt-10' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service