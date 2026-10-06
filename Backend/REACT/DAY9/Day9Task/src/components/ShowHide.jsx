import React from 'react'
import { useState } from 'react'

const ShowHide = () => {
   let [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }
  return (

    <div className='bg-purple-300 p-5'>
      <h1 className='flex flex-col justify-center items-center p-10'>{show?"welcome to react":""}</h1>
      <button onClick = {handleClick} className='block mx-auto bg-purple-600 text-white font-semibold
             px-6 py-3 p-10 gap-4 rounded-lg
             hover:bg-purple-700
             transition duration-300
             shadow-md'>show/hide</button>    
    </div>
  )
}

export default ShowHide
