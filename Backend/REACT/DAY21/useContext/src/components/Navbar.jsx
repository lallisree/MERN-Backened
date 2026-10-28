import React, { useContext } from 'react'
import Datacontext from '../context/Datacontext'

const Navbar = () => {
    const {name} = useContext(Datacontext)
  return (
    <div>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default Navbar
