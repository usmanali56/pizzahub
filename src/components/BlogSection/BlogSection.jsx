import React from 'react'
import img1 from "../../assets/blog1.avif"
import img2 from "../../assets/blog2.avif"
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
]
const BlogSection = () => {
  return (
    <div className='bg-[#fdf8f0] py-16 px-4'>
        <div className='max-w-5xl mx-auto '>
            <div className='text-center mb-12'>
<p className='text-base'>BLOG</p>
<h2 className='text-6xl font-semibold mt-5'>Discover Delicious <br /> Ideas and Insights</h2>
</div>
{/* Blog cards */}
<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
{
    blog.map((index)=>(
        <div key={index} className='bg-white rounded-3xl p-6 shadow-sm border border-amber-100 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-lg'>
<div className='w-full h-64 overflow-hidden rounded-2xl mb-6'>
<img src={index.img} alt={index.title} className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' />

</div>
<p className="text-xs font-semibold text-gray-700 tracking-wider uppercase mb-3">
                ( {index.category} ) &nbsp;&bull;&nbsp; {index.date}
              </p>

              <h3 className="text-lg md:text-xl font-bold text-black mb-6 max-w-sm leading-snug">
                {index.title}
              </h3>
              <button className="bg-[#c83200] hover:bg-[#a62900] text-white text-xs font-bold tracking-wider px-6 py-3 rounded-full uppercase transition-colors">
                READ FULL BLOG
              </button>
        </div>
    ))
}
</div>
        </div>
      
    </div>
  )
}

export default BlogSection
