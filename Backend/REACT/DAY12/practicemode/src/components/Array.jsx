import React, { useState } from 'react'

const Array = () => {
  const [ArrObj, setArrObj] = useState([
    { name: "Lalli", age: 20 },
    { name: "Lilly", age: 22 },
  ]);

  const updateArr = () => {
    const copy = [...ArrObj, { name: "Lavan", age: 30 }];

    setArrObj(copy);
  };

  const addUser = () =>{
      const newArrObj = { name:"Sree",age:18};

  setArrObj([...ArrObj, newArrObj]);
  }
  return (
    <>
      
      <div>
      
        {ArrObj.map((e, i) => (
          <div key={i}>
            
            <h2>{e.name}</h2> 
            <h2>{e.age}</h2>
             
          </div>
        ))}
        <button onClick={updateArr}>Update</button>
        <button onClick={addUser}>Add</button>
      </div>
    </>
  );
};

export default Array
