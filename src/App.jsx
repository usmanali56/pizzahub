import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Menu from './components/Menu/Menu'
import Service from './components/Service/Service'
import Explore from './components/Explore/Explore'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Menu />
      <Service />
      <Explore />
    </div>
  )
}

export default App
