import React from 'react'
import Primitivedata from './components/Primitivedata'

const App = () => {

      const title = "details";
      const name = "Lalli";
      const age = 20;
      const course ="MERN Stack";
      const isStudent = true;

      const obj ={title,name,age,course,isStudent}

  return (
    <div>

      <Primitivedata dataSend = {obj}/>
      
    </div>
  )
}

export default App
