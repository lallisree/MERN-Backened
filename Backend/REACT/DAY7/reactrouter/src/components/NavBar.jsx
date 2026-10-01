import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <div className='bg-blue-400 flex p-2'>
    <div className='gap-10 flex '>
        <Link to="/">AllSports</Link>
        <Link to="/womens">Womens</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/mens">Mens</Link>
      
    </div>
    <div className='ml-auto'>
         <a href="">All sports products Location900392</a>
    </div>
    </div>
  )
}

export default NavBar
