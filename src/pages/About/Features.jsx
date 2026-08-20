import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/Features1.avif'
import img2 from '../../assets/Features2.avif'
import img3 from '../../assets/Features3.avif'

const cards = [
  {
    title: 'Opening in Guangzhou',
    desc: "Book online or call us to choose a time that works best for you. We offer flexible hours & scheduling convenience.",
    img: img1,
    // final position (desktop)
    final: { top: 0, left: 0 },
  },
  {
    title: 'Opening in Shanghai',
    desc: "Meet with our dental experts to your needs. We'll listen, assess, and create a custom care plan just for you.",
    img: img2,
    final: { top: 140, left: 210 },
  },
  {
    title: 'Opening in Beijing',
    desc: "Get treatment in a comfortable environment. From checkups to restorations, every step.",
    img: img3,
    final: { top: 280, left: 420 },
  },
]

const Features = () => {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight

      // total scrollable distance inside this section (section height - viewport height)
      const totalScroll = el.offsetHeight - windowH

      // how far we've scrolled into the section (0 = just entered, totalScroll = fully passed)
      const scrolled = -rect.top

      let p = totalScroll > 0 ? scrolled / totalScroll : 0
      p = Math.min(Math.max(p, 0), 1)

      setProgress(p)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // taller wrapper gives room to scroll while the inner content stays pinned
    <div ref={sectionRef} className='relative w-full h-[280vh] bg-[#fdeedd]'>
      <div className='sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4'>

        {/* Heading */}
        <div className='text-center mb-10 sm:mb-14'>
          <p className='flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-[#c83200] uppercase tracking-wider mb-3'>
            <span className='w-2 h-2 rounded-full bg-[#c83200]'></span>
            Features
          </p>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black leading-tight'>
            Our Delicious Pursuit Of <br /> Pizza Excellence
          </h2>
        </div>

        {/* Cards stage */}
        <div className='relative w-full max-w-3xl h-[420px] sm:h-[480px]'>
          {cards.map((card, i) => {
            // start: all stacked near center-top with slight offset
            const startTop = 40 + i * 12
            const startLeft = 90 - i * 10 // percentage-ish center stack

            // interpolate between stacked start and spread-out final position
            const top = startTop + (card.final.top - startTop) * progress
            const left = startLeft + (card.final.left - startLeft) * progress

            return (
              <div
                key={card.title}
                style={{
                  position: 'absolute',
                  top: `${top}px`,
                  left: window.innerWidth < 768 ? '0' : `${left}px`,
                  transition: 'top 0.05s linear, left 0.05s linear',
                  zIndex: i + 1,
                }}
                className='w-full sm:w-[360px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row items-stretch p-5 gap-4'
              >
                <div className='flex-1 flex flex-col justify-center'>
                  <h3 className='font-bold text-base sm:text-lg text-black mb-2'>{card.title}</h3>
                  <p className='text-xs sm:text-sm text-gray-500 leading-relaxed'>{card.desc}</p>
                </div>
                <img
                  src={card.img}
                  alt={card.title}
                  className='w-full sm:w-32 h-32 object-cover rounded-xl shrink-0'
                />
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Features