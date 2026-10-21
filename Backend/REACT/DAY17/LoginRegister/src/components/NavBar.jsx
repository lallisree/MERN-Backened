import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="bg-violet-300 p-2 flex justify-between">
        <div className="mx-5">Login Register</div>
        <div className="gap-15 flex mx-3">
          <Link to={"/home"}>Home</Link>
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar
