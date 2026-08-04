import React from 'react'
import logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <div className='bg-[#FFF6ED] shadow-md px-6 py-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
<a href="" className='flex items-center gap-2'>
    <img src={logo} alt="" className=''/>
</a>
<ul className='flex items-center gap-8'>
<li><a href="">Home</a></li>
<li><a href="">About</a></li>
<li><a href="">Blog</a></li>
<li><a href="">Menu</a></li>
<li><a href="">Contact us</a></li>
</ul>
      </div>
    </div>
  )
}

export default Navbar
