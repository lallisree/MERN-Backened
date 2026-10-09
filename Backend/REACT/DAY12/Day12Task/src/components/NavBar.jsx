import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <div className="bg-orange-300 p-7 flex justify-between">
        <div className="flex gap-10">Rendering</div>
        <div className="justify-evenly flex gap-20">
          <Link to="/primitive">Primitive</Link>
          <Link to="/">Array</Link>
          <Link to="/object">object</Link>
          <Link to="/arrobj">ArrObj</Link>
          <Link to="/toggle">Toggle</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar
