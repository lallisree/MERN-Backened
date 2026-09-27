import React from 'react'

const Arrobj = () => {
    const students = [

    { id: 1, name: "Lalli", course: "React" },

    { id: 2, name: "Sree", course: "Node" },

    { id: 3, name: "Lilly", course: "MongoDB" }

];
  return (
    <div>
      
        {students.map((student)=>(
            <div key = {student.id}>
                <h2>Name:{student.name}</h2>
                <p>Course:{student.course}</p>
            </div>
              ))}
              </div>
  )
}

export default Arrobj
