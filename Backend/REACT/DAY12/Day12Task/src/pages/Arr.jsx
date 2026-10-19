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
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default Arr
