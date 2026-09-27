import React from 'react'

const Arrray = () => {

    const skills = ["HTML","CSS","Javascript","React","Node"];

  return (
    <div>
        <h2>My skills</h2>
     <ul>
        {skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Arrray
