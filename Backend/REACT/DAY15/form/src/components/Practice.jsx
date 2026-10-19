import React, { useState } from 'react'

const Practice = () => {

  const [name,setName] = useState("");
  const [students,setStudents] = useState([])

  const handleChange = (e) => {

    setName(e.target.value)

  }

  const handleAdd = () => {

    if(name.trim() === ""){
      alert("enter student name");
      return
    }

    setStudents((p) => [...p, name]);
    setName("");
    

  }

   const handleDelete = (index) => {

    const copy = students.filter((student, i) => i !== index);

    setStudents(copy);

   } 
  return (
    <div>
      <h2>{name}</h2>
      <input type = "text" value = {name} placeholder='Enter your name' 
      onChange={handleChange}/>

      <button onClick={handleAdd}>Add student</button>

      {students.map((student,index)=>(
        <p key = {index}>{student}
        <button onClick={()=>handleDelete(index)}>Delete</button>
        </p>
      ))}
    </div>
  )
}

export default Practice
