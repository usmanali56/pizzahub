import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact us', path: '/contact' },
  ]

  return (
    <div className='bg-[#FFF6ED] shadow-md px-6 py-4 relative'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link to="/" className='flex items-center gap-2'>
          <img src={logo} alt="" className='h-8 sm:h-10' />
        </Link>

        {/* Desktop menu */}
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link to={item.path} className='hover:text-[#c83200] transition-colors'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger icon - mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50'
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className='flex flex-col items-center gap-6 py-6'>
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className='text-lg font-medium hover:text-[#c83200] transition-colors'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar