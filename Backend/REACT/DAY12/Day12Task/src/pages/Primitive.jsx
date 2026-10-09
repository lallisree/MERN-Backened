import React, { useState } from 'react'

const Primitive = () => {

  const[employe,setEmploye]=useState({name:"Lalli",salary:25000});

  const updateEmploye = () => {

    setEmploye({
      ...employe,
      salary: 5000,
    });

  }

  return (
    <>
      <div className="bg-blue-300 h-165 justify-center">
        <div className="p-10 flex justify-center gap-10">
          <h1>{employe.name}</h1>
          <h1>{employe.salary}</h1>
        </div>
        <div>
          <button
            className="p-2 mx-auto block bg-amber-200 rounded-4xl"
            onClick={updateEmploye}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default Primitive
