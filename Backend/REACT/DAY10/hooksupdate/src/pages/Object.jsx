import React, { useState } from 'react'

const Object = () => {

  const[object,setObject] = useState({name:"react",number:3874878})

  const objUpdate = () =>{

    const copy = {...objUpdate,number:"Node"}

    setObject(copy)
  }

  return (
    <>
    <div>
      <div>
        <h2>{object.name}</h2>
        <p>{object.number} </p>
        <button onClick={objUpdate}>Click</button>
      </div>
    </div>
    </>
  )
}

export default Object
