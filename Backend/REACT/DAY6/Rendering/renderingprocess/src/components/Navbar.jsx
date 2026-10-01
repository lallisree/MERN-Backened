import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='bg-green-200 flex justify-between items-center p-4'>
      <div className='justify-start flex items-center'>
        Logo
      </div>
    <div className='bg-green-200 flex justify-end gap-4 '>

        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
      
    </div>
    </nav>
  )
}

export default Navbar
