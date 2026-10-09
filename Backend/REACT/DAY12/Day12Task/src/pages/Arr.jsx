import React, { useState } from 'react'

const Arr = () => {

  const [course, setCourse] = useState(["HTML", "CSS", "JavaScript"]);

  const addReact = ()=>{
 const copy = [...course,"React"];

 setCourse(copy)
  }

  const updateCss = ()=>{

    const copy = course.map((e)=>e==="CSS"?"Advanced Css":e);

    setCourse(copy)
  }

  return (
    <>
      <div className="bg-green-300 h-165 ">
        <div className="p-10 flex justify-center gap-10">
          {course.map((e, i) => (
            <h1 key={i + 1}>{e}</h1>
          ))}
        </div>
        <div>
          <button
            className="p-2 mx-auto block text-amber-50 bg-green-500 rounded-4xl"
            onClick={addReact}
          >
            Add
          </button>
          <button
            className="p-2 mx-auto block gap-15 bg-green-500 rounded-4xl"
            onClick={updateCss}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default Arr
