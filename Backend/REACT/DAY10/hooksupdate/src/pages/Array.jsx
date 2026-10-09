// import React, { useState } from 'react'

// const Array = () => {

//   const [arr,setArr] = useState([1,2,3,4,5])

//   const updateArr = () =>{
//     const copy = [...arr]

//     const updateData = copy.map((e) => (e === 2 ? 200 : e));

//     console.log(updateData);
    

//     //To add the new number in arr
//     // const copy = [...arr, 1000];
//     // copy.push(6)

//     // copy[0 ] = 100;

//     setArr(updateData);

//     // console.log(copy);
//   }
//   return (
//     <div>
//     <div>{arr.map((e,i)=>( 
//       <h1 key={i+1}>{e}</h1>
//     ))}
//       <button onClick={updateArr}>Update Array</button>
//     </div>
//     </div>
//   )
// }

// export default Array

//setArr((prev)=>[...prev,""])  
//This is the best way to update the array in react.

import React from 'react'
import { useState } from 'react'

const Array = () => {
  const [arr, setArr] = useState(["React", "java", "Node", "JS"]);

  const updatearr = (datas)=>{
    const copy = [...arr]

    const updatearr = copy.map((e)=>e===datas?"React update value":e)

    setArr(updatearr)
  }
  return (
    <div>
      <div>
        {arr.map((e, i) => (
          <div key={i + 1}>
            <h1>{e}</h1>
          </div>
        ))}

        <button onClick={() => updatearr("java")}>Update Array</button>
        <button onClick={updatearr}>Update</button>
      </div>
    </div>
  );
}

export default Array

// //setArr((p)=>[...p].map((e)=>e===datas>"Updated":e))
