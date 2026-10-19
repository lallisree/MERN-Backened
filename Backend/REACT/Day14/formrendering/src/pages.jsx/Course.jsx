import React, { useState } from 'react'

const Course = () => {

  const [coursename,setCourseName] = useState("");
  const [courses,setCourses] = useState([]);

  const handleChange = (e) =>{

    const value = e.target.value;
     setCourseName(value)

  };

  const AddCourse = () => {

    const copy = [...courses,coursename]

    setCourseName("");

    setCourses(copy)
  };

  const DeleteCourse = (data) => {
      const copy = [...courses];

      const deletedata = copy.filter((e, i) => i != data);

      setCourses(deletedata);
  }
  return (
    <div>
      {courses.map((e, i) => (
        <div key={i + 1}>
          <h1>{i + 1}</h1>
          <p>{e}</p>

          <button className='bg-green-300 p-2 rounded-4xl flex' onClick={() => DeleteCourse(i)}>Delete</button>
        </div>
      ))}
      <input type="text" value={coursename} onChange={handleChange} />
      <button className='bg-green-400 p-3 rounded-3xl flex' onClick={AddCourse}>Add</button>
    </div>
  );
}

export default Course
