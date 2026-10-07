import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="bg-blue-400 flex p-2 gap-15 justify-between">
      <div className='p-3 text-black'>
        Rendering
      </div>
      <div className="gap-10 flex p-3">
        <Link to="/">Array</Link>
        <Link to="/object">Object</Link>
        <Link to="/toggle">Toggle</Link>
      </div>
    </div>
  );
}

export default NavBar
