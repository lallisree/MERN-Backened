import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Womens from '../pages/Womens'
import Kids from '../pages/Kids'
import Mens from '../pages/Mens'
import Navbar from '../components/NavBar'   
import AllSports from '../pages/AllSports'

const Approuter = () => {
  return (
    <div>
            
            <Navbar/>

        <Routes>
            <Route path='/' element={<AllSports/>}/>
            <Route path='/womens' element={<Womens/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/mens' element={<Mens/>}/>
        </Routes>
      
    </div>
  )
}

export default Approuter
