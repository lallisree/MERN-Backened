import React, { useState } from 'react'

const Student = () => {

    const [name,setName] = useState("");
    const [student,setStudent] = useState([]);

     const handleChange = (e) => {

       const value = e.target.value;

       setName(value);
     };

     const addStudent = () => {

      const copy = [...student,name]

      setName("")

      setStudent(copy)

     }

  return (
    <div>
        {student.map((e,i)=>(
          <h1 key = {i+1}>{e}</h1>
        ))}
        <input type = "text" value = {name} onChange = {handleChange} />

        <button className='bg-amber-300 p-3 rounded-3xl gap-3 flex' onClick = {addStudent}>Add</button>


    </div>
  )
}

export default Student
