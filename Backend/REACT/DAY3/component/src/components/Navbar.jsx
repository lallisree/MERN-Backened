import React from 'react'

const Navbar = () => {
  return (
    <div>
     <header className="bg-white">
  <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
    <a href="#" className="text-2xl font-bold tracking-wide text-green-700">
      ORGAMIC
    </a>

    <div className="flex gap-8 text-sm font-medium text-gray-700">
      <a href="#" className="hover:text-green-700">Home</a>
      <a href="#" className="hover:text-green-700">Shop</a>
      <a href="#" className="hover:text-green-700">About</a>
      <a href="#" className="hover:text-green-700">Contact</a>
    </div>
  </nav>
</header>
      
    </div>
  )
}

export default Navbar
