import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Products/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
