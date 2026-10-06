import React from 'react'
import {useState} from 'react'

const IncDecRes = () => {
    let [count, setCount] = useState(0)

  const handleIncrement = () => {

    count++
    setCount(count)

  }

  const handleDecrement = ()  => {
    count --
    setCount(count)
  }

  const handleResset = () => {
    count = 0
    setCount(count)
  }
  return (
    <div className='bg-green-300 p-4'>
      <h1 className='justify-center items-center flex p-5'>{count}</h1>
      <button onClick={handleIncrement} className='block mx-auto bg-green-600 text-white font-semibold px-6 py-3 p-10 gap-4 rounded-lg hover:bg-green-700 transition duration-300 shadow-md'>
        Increment
      </button><br></br>
      <button onClick={handleDecrement} className='block mx-auto bg-green-600 text-white font-semibold px-6 py-3 p-10 gap-4 rounded-lg hover:bg-green-700 transition duration-300 shadow-md'>
        Decrement
      </button><br></br>
      <button onClick={handleResset} className='block mx-auto bg-green-600 text-white font-semibold px-6 py-3 p-10 gap-4 rounded-lg hover:bg-green-700 transition duration-300 shadow-md'>
        Reset
      </button>
    </div>
  )
}


export default IncDecRes
