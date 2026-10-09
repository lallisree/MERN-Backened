import React from 'react'
import { useState } from 'react'

const notes = () => {
 
  const [arr,setArr] = useState([1,2,3,4,5])

  
  const handleClick = ()=>{


//     const adding = [...arr]



//     setArr(adding)

//     const adding = [...arr]

//     adding.push(98989)

//     setArr(adding)

//      setArr((prev)=>[...prev,89898])


//    Update

//      const copy = [...arr]

//     const updateData = copy.map((e)=>e==2?4536:e)

//     setArr(updateData)

//     setArr((prev)=>[...prev].map((e)=>e==1?4653:e))

  }

  return (
    <>
    <div>
      {arr.map((e,i)=>(
        <h1 key={i+1}>{e}</h1>
      ))}
    </div>

    <button onClick={handleClick}>Click to Add</button>
    </>
  )
}

export default notes
