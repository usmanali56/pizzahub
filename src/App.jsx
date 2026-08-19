import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Menu from './components/Menu/Menu'
import Service from './components/Service/Service'
import Explore from './components/Explore/Explore'
import Discover from './components/Discover/Discover'
import Pizzapro from './components/Pizzapro/Pizzapro'
import PizzaApproach from './components/PizzaApproach/PizzaApproach'
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider'
import BlogSection from './components/BlogSection/BlogSection'
import PromoBanner from './components/PromoBanner/PromoBanner'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Menu />
      <Service />
      <Explore />
      <Discover />
      <Pizzapro />
      <PizzaApproach />
      <TestimonialSlider />
      <BlogSection />
      <PromoBanner />
    </div>
  )
}

export default App
