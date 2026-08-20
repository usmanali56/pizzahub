import React, { useEffect, useState } from 'react'
import card1 from '../../assets/card1.avif'
import card2 from '../../assets/card2.avif'
import card3 from '../../assets/card3.avif'
import card4 from '../../assets/card4.avif'
import card5 from '../../assets/card5.avif'
import card6 from '../../assets/card6.avif'
import card7 from '../../assets/card7.avif'

const cards = [
    {
        name: "Autumn Harvest",
        price: "$23",
        img: card1,
        category: "Classic Pizzas",
    },
    {
        name: "Crispy Crust",
        price: "$20",
        img: card2,
        category: "Signature Pizzas",
    },
    {
        name: "Punny Pepperoni",
        price: "$22",
        img: card3,
        category: "Meat Lovers",
    },
    {
        name: "Cheesy Chuckle",
        price: "$25",
        img: card4,
        category: "Classic Pizzas",
    },
    {
        name: "Mapo Tofu",
        price: "$15",
        img: card5,
        category: "Veggie Pizzas",
    },
    {
        name: "Sassy Greens",
        price: "$18",
        img: card6,
        category: "Veggie Pizzas",
    },
    {
        name: "Peking Duck",
        price: "$27",
        img: card7,
        category: "Meat Lovers",
    },
]

const categories = ["All", "Classic Pizzas", "Signature Pizzas", "Meat Lovers", "Veggie Pizzas"]

const Discover = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredCards =
    activeCategory === "All"
      ? cards
      : cards.filter((item) => item.category === activeCategory)

      const fullText="Discover the Perfect Slice Crafted for You"
      const[typedText,setTypedText]=useState("")
     
useEffect(()=>{
    let index=0
    const interval=setInterval(()=>{
         setTypedText(fullText.slice(0, index+1))
      index++
      if(index == fullText.length){
        clearInterval(interval)
      }
    },60)
    return ()=>clearInterval(interval)

},[])


  return (
    <div className="w-full relative">
      {/* Background layer — red top + checker strip + cream bottom, sab ek hi background hy */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-[1400px] sm:h-[900px] md:h-250 bg-[#c8371c]" />
        <div
          className="w-full"
          style={{
            height: "136px",
            backgroundColor: "#fdf6ec",
            backgroundImage:
              "repeating-conic-gradient(#c8371c 0% 25%, #fdf6ec 0% 50%)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="w-full h-64 bg-[#fdf6ec]" />
      </div>

      {/* Content — is background ke upar directly likhein */}
      <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 text-center">
       <p className='text-sm sm:text-base text-center text-white'>Explore Pizza</p>
       <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white max-w-3xl mx-auto mt-4 sm:mt-5 leading-tight min-h-[3.5em] sm:min-h-[2.5em]'>{typedText}</h2>

       {/* Buttons */}
      <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 flex-wrap px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 sm:px-8 md:px-14 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base rounded-full transition-colors ${
              activeCategory === cat
                ? "bg-red-500 text-white"
                : "border border-gray-300 text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Images */}
      <div className='flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto mt-8 sm:mt-10'>
        {filteredCards.map((item, index) => (
          <div key={index} className="w-full max-w-[280px] sm:w-56 md:w-64">
            <img
              src={item.img}
              alt={item.name}
              className='h-48 sm:h-52 md:h-60 w-full object-cover rounded-md'
            />
            <div className='flex justify-between items-center mt-3 sm:mt-4 md:mt-5'>
              <h6 className='text-lg sm:text-xl md:text-2xl font-medium text-white'>{item.name}</h6>
              <h6 className='text-lg sm:text-xl md:text-2xl font-medium text-white'>{item.price}</h6>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Discover