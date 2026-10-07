import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='bg-pink-400 justify-between flex'>
    
      <div className='p-4 justify-between flex'>Rendering</div>
      <div className='p-4 gap-10 flex'>
        <Link to="/">Array</Link>
        <Link to="/object">Object</Link>
        <Link to="/toggle">Toggle</Link>
      </div>
    </div>
   
  );
}

export default NavBar
