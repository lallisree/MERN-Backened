import React from 'react'
import {useState} from 'react'

const Object = () => {
  
    let [obj,setName] = useState({name:"Lalli"})
  
    const handleClick = () => {
  
      const data = {...obj, name:"Lilly"}
  
      setName(data)
    }
  
    return (
     <>
     <div className='bg-blue-300'>
      <div className='flex items-center justify-center bg-blue-300'>
        <h1 className='flex flex-coljustify-center items-center p-10'>{obj.name}</h1>
        <button onClick={handleClick} className="bg-blue-600 text-white font-semibold 
                   px-6 py-3 rounded-lg 
                   hover:bg-blue-700 
                   transition duration-300 
                   shadow-md">Change Name</button>
      </div>
      </div>
      </>
    )
  }
  
export default Object
