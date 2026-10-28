
// import {  useRef } from "react";

// const App = () => {

//   const textRef = useRef("");
//   // const [show,setShow] = useState("")

//   const Show=()=>{
//     textRef.current.style.backgroundColor = "pink"

//     // document.write.style.backgroundColor = "blue";

//     // setShow();

//   }

//   return (
//     <div>
//       <h1 ref={textRef}>Welcome</h1>
//       {/* <h1>{show}</h1> */}
//       <button onClick={Show}>Show</button>
//     </div>
//   );
// }

// export default App

import React from 'react'
import InputFocus from './components/InputFocus'
import Password from './components/Password'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div>
      <InputFocus/>
      <hr/>
      <Password/>
      <hr/>
      <Navigation/>
    </div>
  )
}

export default App
