import { useState } from "react";

const Form = () => {

    const [username,setUsername] = useState("")

    const handleChange = (e) =>{

        // console.log(e.target.value);

        setUsername(e.target.value)

        // if(username%2===0){
        //     alert("Even number") 
        // }else{
        //     alert("Odd number")
        // }
        

    }

  return (
    <>
        <input type="text"
        onChange = {handleChange} />
        <h1>{username}</h1>
    </>
  )
}

export default Form
