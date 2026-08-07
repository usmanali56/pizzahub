import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Menu from './components/Menu/Menu'
import Service from './components/Service/Service'
import Explore from './components/Explore/Explore'
import Discover from './components/Discover/Discover'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Menu />
      <Service />
      <Explore />
      <Discover />
    </div>
  )
}

export default App
