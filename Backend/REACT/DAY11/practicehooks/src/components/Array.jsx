import React from 'react'
import { useState } from 'react';

const Array = () => {
    const [students, setStudents] = useState(["Lalli","Sree","Lilly"]);

    // const addStudent = () => {
    //     setStudents([...students,"Kumar"]);
    // };
    const updateStudent = () => {
        
          const copy =  [...students,"Kumar"]

          const addArray = copy.map((student)=>
            student === "Sree"?"Akshaya":student)

        addArray(updateStudent)
    }


  return (
    <div>
        {students.map((student,index)=>(
            <p key = {index}>{student}</p>
        ))}
        <button onClick = {addStudent}>Add Name</button>
        <button onClick = {updateStudent}>Update</button>
       
    </div>
  )
}

export default Array
