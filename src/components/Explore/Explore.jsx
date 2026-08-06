import React, { useState, useEffect } from 'react'
import img from '../../assets/explore-right.avif'
import pizza from '../../assets/explore-pizza.avif'

const Explore = () => {
  const fullText = "Explore our newest pizza"
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) {
        clearInterval(interval)
      }
    }, 60) // typing speed, ms per letter

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='min-h-screen flex '>
      {/* left side */}
      <div className='w-1/2 flex mt-20 px-16 '>
        <div>
          <p className='text-base font-medium'>Newly added</p>
          <h2 className='text-6xl font-semibold max-w-md mt-10 min-h-[1.2em]'>
            {typedText}
          </h2>

          <div className='flex flex-col justify-between gap-10 mt-10 text-center'>
            <div 
              className='bg-cover '
              style={{ 
                backgroundImage: `url('https://framerusercontent.com/images/B2fgopjRfPBelBpVrkbTqCuEA.svg?width=563&height=191')`,
                width: '400px', 
                height: '200px'
              }}
            >
              <h6 className='text-2xl font-semibold text-white mt-5'>🍕Truffle fire pizza</h6>
              <p className='text-base text-white mt-3'>A rich combination of creamy mozzarella, roasted mushrooms, 
                spicy beef slices, and truffle flavors.
              </p>
              <div className='flex  justify-between p-5 text-white'>
                <p>$18.90</p>
                <a href=''>ORDER NOW→</a>
              </div>
            </div>

            <div 
              className='bg-cover '
              style={{ 
                backgroundImage: `url('https://framerusercontent.com/images/B2fgopjRfPBelBpVrkbTqCuEA.svg?width=563&height=191')`,
                width: '400px', 
                height: '200px'
              }}
            >
              <h6 className='text-2xl font-semibold text-white mt-5'>🍕Smoky ranch chicken</h6>
              <p className='text-base text-white mt-3'>Loaded with grilled chicken, smoky BBQ sauce, 
                caramelized onions, ranch drizzle, and melted cheddar
              </p>
              <div className='flex justify-between p-5 text-white'>
                <p>$16.90</p>
                <a href=''>ORDER NOW →</a>
              </div>
            </div>

            <div 
              className='bg-cover '
              style={{ 
                backgroundImage: `url('https://framerusercontent.com/images/B2fgopjRfPBelBpVrkbTqCuEA.svg?width=563&height=191')`,
                width: '400px', 
                height: '200px'
              }}
            >
              <h6 className='text-2xl font-semibold text-white mt-5'>🍕Mediterranean veggie burst</h6>
              <p className='text-base text-white mt-3'>A colorful mix of olives, cherry tomatoes,
                feta cheese, bell peppers, red onions, basil, and fresh herbs.
              </p>
              <div className='flex justify-between p-5 text-white'>
                <p>$15.90</p>
                <a href=''>ORDER NOW →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right part */}
      <div className="w-full h-280 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}>
        <div className="w-96 h-96 flex items-center justify-center">
          <img 
            src={pizza} 
            alt="" 
            className='w-full h-full object-contain animate-spin-slow' 
          />
        </div>
      </div>
    </div>
  )
}

export default Explore