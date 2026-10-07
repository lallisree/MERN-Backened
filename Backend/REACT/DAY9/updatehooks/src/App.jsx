// import { useState } from 'react'

// const App = () => {

  
//   let [number, setNumber] = useState(0)

//   const handleClick = () => {
//      number++
//      setNumber(number)
//   }

    
//   return (
//     <div>
//       <h1>{number}</h1>
//     <h1>This is hooks</h1>
//     <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default App

 

// import { useState } from "react"
// const App = () => {
 
//   // console.log('running');  

//   let [a,setA] = useState(0)

//   const handleClick = () =>{
//     a++
//     console.log(a)

//     setA(a)
//   }
//   return (
//     <div>
//       <h1>{a}</h1>
//       <button onClick={handleClick}>Click</button>
      
//     </div>
//   )
// }

// export default App

/**using to check boolean in useState**/

// import { useState } from "react"

// const App = () => {

//    let [a,setA] = useState(true)

//    const handleClick = () =>{
//     setA(!a)
//    }

//   return (
      
//     <div>
//       <h1>{a?"React":"Not React"}</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default App

/**using array in useState**/

// import {useState} from "react"

// const App = () => {

//   let [a,setA] = useState([1,2,3,4,5])

//   const copy = [...a]

//   const handleClick = () =>{
    
//     copy.push(2)

//     setA(copy)

//   }
//   return (
//     <>
//       <h1>{a}</h1>
//       <div>
//         {copy.map((e,i) =>(
//           <p key={i}>{e}</p>
//         ))}
//       </div>
//       <button onClick={handleClick}>Click</button>
//     </>
//   )
// }

// export default App

/**using object in useState**/

// import {useState} from "react"

// const App = () => {

//   let [obj,setObj] = useState({name: "Lalli"})

//   const handleClick = () => {

//     const datas = {...obj,name:"Sree"}

//     setObj(datas)

//   }
//   return (
//     <div>
//       <h1>{obj.name}</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import {useState} from "react"

const App = () => {
  const [name, setName] = useState("Lalli");
  const [inputName, setInputName] = useState("Lilly");
  const handleClick = () => {
    setName(inputName);
  };
  return (
    <div>
      <h2>{name}</h2>

      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleClick}> Change Name </button>
    </div>
  );
}

export default App

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("Lalli");

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <h2>{name}</h2>
//     </div>
//   );
// }

// export default App;
