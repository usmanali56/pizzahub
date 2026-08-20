import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Menu1 from './pages/Menu1/Menu1'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/menu' element={<Menu1 />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App