import React from 'react'
import img1 from "../../assets/menu1-img1.avif"
import img2 from "../../assets/menu1-img2.avif"
import img3 from "../../assets/menu1-img3.avif"
import img4 from "../../assets/menu1-img4.avif"
import img5 from "../../assets/menu1-img5.avif"
import img6 from "../../assets/menu1-img6.webp"
import img7 from "../../assets/menu1-img7.avif"

const pizza=[
  {
    name:"Autumn Harvest",
    price:"$23",
    img:img1
  },
  {
    name:"Crispy Crust",
    price:"$20",
    img:img2
  },
   {
    name:"Punny Pepperoni",
    price:"$22",
    img:img3
  },
   {
    name:"Cheesy Chuckle",
    price:"$25",
    img:img4
  },
   {
    name:"Peking Duck",
    price:"$27",
    img:img5
  },
   {
    name:"Mapo Tofu",
    price:"$15",
    img:img6
  },
   {
    name:"Sassy Greens",
    price:"$18",
    img:img7
  },
]
const Menu1 = () => {
  return (
    <div className='w-full bg-[#fdeedd] py-12 sm:py-16 lg:py-20 px-4 sm:px-8'>
      <div className='max-w-6xl mx-auto'>
{/* Heading */}
<div className='text-center mb-10 sm:mb-14'>
  <p className='text-base text-gray-700'>Menu</p>
  <h2 className=' text-3xl sm:text-4xl md:text-6xl font-semibold uppercae leading-tight'>Explore Our <br /> Delicious Pizza Menu</h2>

</div>
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {pizza.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index === 6 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className='w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-2xl'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex justify-between items-center mt-4'>
                <h3 className='text-base sm:text-lg font-bold text-black'>{item.name}</h3>
                <span className='text-base sm:text-lg font-bold text-black'>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Menu1
