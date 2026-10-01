import React from 'react'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Help from '../pages/Help'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'


const Approuter = () => {
  return (
 <div>
       <Navbar/>
      
          <Routes>
              <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/help" element={<Help/>}/>
          </Routes>
      
    
    </div>
  )
}

export default Approuter
