import React from 'react'
import img1 from '../../assets/BlogPage-1.avif'
import img2 from '../../assets/BlogPage-2.avif'
import img3 from '../../assets/BlogPage-3.avif'
import img4 from '../../assets/BlogPage-4.avif'
import img5 from '../../assets/BlogPage-5.avif'
import img6 from '../../assets/BlogPage-6.avif'
import PromoBanner from '../../components/PromoBanner/PromoBanner'

const blog=[
    {
        id:1,
        category:"RESTAURANT",
        date:"MAY 24, 2026",
        title:"The Art Of Flavor: How We Craft Each Plate With Care",
        img:img1
    },
     {
        id:2,
        category:"CHINESE FOOD",
        date:"APR 28, 2026",
        title:"A Taste Of Tradition: Story Behind Signature Dish",
        img:img2
    },
     {
        id:3,
        category:"BUSINESS",
        date:"JUN 05, 2026",
        title:"Why Fresh Ingredients Make Biggest Difference",
        img:img3
    },
     {
        id:4,
        category:"RESTAURANT",
        date:"JUNE 12, 2026",
        title:"Bringing Local Freshness To Every Plate We Serve",
        img:img4
    },
     {
        id:5,
        category:"RESTAURANT",
        date:"JUNE 18, 2026",
        title:"Behind The Scenes :A Day In The Life Of Our Chefs",
        img:img5
    },
     {
        id:6,
        category:"The Creative Process Behind Our Seasonal Menu",
        date:"JUNE 16,2026",
        title:"CHINESE FOOD",
        img:img6
    },

]
const Blog = () => {
  return (
    <>
    <div className='bg-[#fdeedd] py-12 sm:py-16 lg:py-20 px-4 sm:px-8'>
      <div className='max-w-5xl mx-auto'>
{/* Heading content */}
<div className='text-center mb-10 sm:mb-14'>
<p className='text-base text-gray-600'>Blog</p>
<h2 className='text-3xl sm:w-4xl md:text-6xl uppercase font-semibold leading-tight'>Fresh Ideas, Delicious <br /> Recipes & Pizza Insights</h2>
</div>

{/* Cards */}
<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8'>
{
    blog.map((item)=>(
        <div key={item.id} className='bg-white rounded-3xl p-6 shadow-sm border border-amber-100 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-lg'>
<div className='w-full h-48 sm:h-56 md:h-64 overflow-hidden mb-4 sm:mb-6 rounded-2xl'>
<img src={item.img} alt={item.title}  className='w-full h-full object-cover transition-transform duration-500 hover:saturate-105'/>
</div>
 <p className="text-[10px] sm:text-xs font-semibold text-gray-700 tracking-wider uppercase mb-2 sm:mb-3">
                ( {item.category} ) &nbsp;&bull;&nbsp; {item.date}
              </p>

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-4 sm:mb-6 max-w-sm leading-snug">
                {item.title}
              </h3>

              <button className="bg-[#c83200] hover:bg-[#a62900] text-white text-[10px] sm:text-xs font-bold tracking-wider px-5 sm:px-6 py-2.5 sm:py-3 rounded-full uppercase transition-colors">
                READ FULL BLOG
              </button>
        </div>
    ))
}
</div>
      </div>
    </div>
<PromoBanner />
    </>
  )
}

export default Blog
