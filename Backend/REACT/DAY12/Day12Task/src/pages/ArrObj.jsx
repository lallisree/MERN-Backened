import React, { useState } from 'react'

const ArrObj = () => {

  const [employe, setEmploye] = useState([
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Priya", salary: 30000 },
    { id: 3, name: "Kumar", salary: 28000 },
  ]);

  const AddEmploye = () =>{

    const copy = [
      ...employe,
      {
        id: 4,
        name: "Bala",
        salary: 32000,
      },
    ];
    setEmploye(copy)

  }

  const UpdateSalary = () =>{

    const copy = employe.map((emp)=>emp.id===2?{...emp,salary:35000}:emp)

    setEmploye(copy)
  }
  
  return (
    <>
      <div className="bg-violet-400 h-165">
        <div className="p-20 flex justify-center text-center gap-10">
          {employe.map((e, i) => (
            <div key={e.id}>
              <h1>{e.id}</h1>
              <h1>{e.name}</h1>
              <h1>{e.salary}</h1>
            </div>
          ))}
        </div>
        <div>
          <button
            className="p-2 mx-auto block gap-15 bg-violet-300 rounded-4xl"
            onClick={AddEmploye}
          >
            Add Employe
          </button>
          <button
            className="p-2 mx-auto block gap-15 bg-violet-300 rounded-4xl"
            onClick={UpdateSalary}
          >
            Update Employe
          </button>
        </div>
      </div>
    </>
  );
}

export default ArrObj
