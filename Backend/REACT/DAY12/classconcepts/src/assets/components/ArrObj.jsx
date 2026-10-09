import React from 'react'
import { useState } from 'react'

const ArrObj = () => {
  const [obj,setObj] = useState([{username:"React",age:20},{username:"Node",age:22},{username:"JS",age:21}])


 
 const handleClick = ()=>{

   const updateData = [...obj]

 const showing = updateData.map((e,i)=>i===1?{...e,username:"Js"}:e)

 setObj(showing)

    //  setObj({...obj,username:"Node"})

 }

  return (
    <>
    <div>
      {obj.map((e,i)=>(
        <div key={i+1}>
          <h3>{e.username}</h3>
          <h3>{e.age}</h3>
        </div>
      ))}

      <button onClick={handleClick}>Click to update</button>
    </div>
    </>
  )
}
export default ArrObj
