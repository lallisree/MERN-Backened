import React from 'react'
import {useState} from 'react'

const Toggle = () => {
 
  let [num, setNum] = useState(0)

  const handleClick = () => {
    num++
    setNum(num)
  }
  return (
    <div className='bg-pink-300 p-3 justify-center items-center'>
      <h1 className='justify-center items-center flex p-10'>{num}</h1>
      <button onClick={handleClick} className='block mx-auto bg-pink-600 text-white font-semibold px-6 py-3
                                      p-10 gap-4 rounded-lg hover:bg-pink-700 transition duration-300 shadow-md'>
        Like
      </button>
    </div>
  )
}

export default Toggle
