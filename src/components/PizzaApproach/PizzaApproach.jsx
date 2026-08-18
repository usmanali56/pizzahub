import React, { useState } from 'react'
import img1 from "../../assets/approach1.avif"
import img2 from "../../assets/approach2.avif"
import img3 from "../../assets/approach3.avif"

const items = [
  {
    id: "01",
    title: "Fresh Pizza Toppings",
    desc: "We carefully select high-quality, garden-fresh ingredients and premium meats every single morning. This ensures that every bite you take is bursting with authentic, vibrant flavors that elevate your entire pizza experience.",
    img: img1
  },
  {
    id: "02",
    title: "Our Signature Crust",
    desc: "Our signature pizza dough is made entirely from scratch daily and prepared by hand using traditional techniques. We let it rest perfectly to create a light, airy crust that achieves the ultimate golden crunch when baked.",
    img: img2
  },
  {
    id: "03",
    title: "Perfect pizza Baking",
    desc: "A rich combination of creamy mozzarella, roasted mushrooms, spicy beef slices, and truffle. A rich combination of creamy mozzarella, roasted mushrooms, spicy beef slices, and truffle.",
    img: img3
  }
]

const PizzaApproach = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className='max-w-5xl mx-auto px-4 py-12'>
      <div className='text-center mb-10'>
        <p className='text-base text-gray-700 font-bold uppercase tracking-wider'>Our Approach</p>
        <h2 className='text-4xl md:text-5xl font-semibold mt-3 uppercase'>
          Committed to Quality <br /> in Every Slice We Make
        </h2>
      </div>

      {/* Accordion list */}
      <div className='divide-y divide-dashed divide-gray-300 border-t border-b border-dashed border-gray-300'>
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className='py-6 transition-all duration-500 ease-in-out cursor-pointer group'
            >
              <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
                
                {/* Left side: Title, Description & Button */}
                <div className='flex-1 flex flex-col justify-between self-stretch'>
                  <div>
                    <h3 className='text-xl md:text-2xl font-bold text-gray-900 group-hover:text-black'>
                      {item.title}
                    </h3>
                    
                    {/* Smooth Expandable Content */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isHovered ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isHovered ? 'max-h-16 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                    } overflow-hidden`}
                  >
                    <button className="bg-[#c83200] hover:bg-[#a62900] text-white text-xs font-bold tracking-wider px-6 py-2.5 rounded-full transition-colors uppercase">
                      Read More
                    </button>
                  </div>
                </div>

                {/* Index Number */}
                <span className="text-xs font-semibold text-gray-500 px-2 self-start md:self-center">
                  {item.id}
                </span>

                {/* Right side: Expandable Image */}
                <div
                  className={`w-full md:w-[480px] overflow-hidden rounded-2xl transition-all duration-500 ease-in-out ${
                    isHovered ? 'h-64 md:h-72' : 'h-16'
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PizzaApproach