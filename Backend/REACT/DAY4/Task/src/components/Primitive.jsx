import React from 'react'

const Primitive = () => {

  const studentName = "Lalli";
  const age = 20;
  const course = "React";
  const fees = 15000;

  return (
    <div>

      <h2>{studentName}</h2>
      <p>Age:{age}</p>
      <p>Course:{course}</p>
      <p>Fees:{fees}</p>
      
    </div>
  )
}

export default Primitive
