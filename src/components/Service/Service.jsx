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
      <div className="w-full bg-[#c8371c] py-20 text-[#fdf6ec] min-h-screen">
        <div className='container mx-auto px-4'>
          <h5 className='text-xl text-center text-white'>BEHIND THE SLICE</h5>
          <h1 className="text-5xl font-bold text-center text-white leading-tight whitespace-pre-line mt-8">
{`Serving Delicious Moments
with every Slice`}
          </h1>
          <div className='relative mt-14 flex items-center justify-center'>
            {/* left side */}
            <img src={img1} alt="" className='absolute left-30 w-52 md:w-72 rounded-md mt-10 ' />

            {/* center content */}
            <div className='max-w-xl z-10 text-center flex flex-col justify-between gap-10'>
              <div className='w-[400px] flex items-center justify-between shadow-md bg-white rounded-2xl h-20 '>
                <Counter target={10000} suffix="+" className='text-black p-3 text-6xl' />
                <p className='text-xl text-gray-500 p-3'>Pizzas Served</p>
              </div>

              <div className='w-[400px] flex items-center justify-between shadow-md bg-white rounded-2xl h-20'>
                <Counter target={5000} suffix="+" className='text-black p-3 text-6xl' />
                <p className='text-xl text-gray-500 p-3'>Happy Customers</p>
              </div>

              <div className='w-[400px] flex items-center justify-between shadow-md bg-white rounded-2xl h-20'>
                <Counter target={15} suffix="+" className='text-black p-3 text-6xl' />
                <p className='text-xl text-gray-500 p-3'>Expert Chefs</p>
              </div>
            </div>

            {/* right image */}
            <img src={img2} alt="" className='absolute right-30 w-52 md:w-64 rounded-md mt-10' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service