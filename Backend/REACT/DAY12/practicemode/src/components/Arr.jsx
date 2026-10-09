import React from 'react'
import { useState } from 'react'

const Arr = () => {

    const [arr,setarr] = useState([1,2,3,4,5])

    const addArr = () =>{

        const copy = [...arr,10]
        
    setarr(copy);

    }

  const updateArr = () => {

    const copy = arr.map((e)=> e===2? 9 : e);

    setarr(copy)
  }

  return (
    <div>
      <div>
        {arr.map((e, i) => (
          <h1 key={i + 1}>{e}</h1>
        ))}
      </div>

      <button onClick = {addArr}>Add</button>
      <button onClick = {updateArr}>update</button>
    </div>
  );
}

export default Arr
