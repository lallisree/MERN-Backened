import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div className='bg-pink-400 flex p-6 text-amber-50 justify-between gap-8 items-center'>
    <div>
        Form Rendering
    </div>
    <div className='gap-5 flex'>

      <Link to="/">Student</Link>
      <Link to="/course">Course</Link>
      <Link to="/numbers">Numbers</Link>
      <Link to="/fruit">Fruit</Link>
      <Link to="/employe">Employe</Link>

    </div>
    </div>
    </>
  );
}

export default NavBar
