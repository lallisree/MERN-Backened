import React, { useEffect,useState} from 'react'

const Timeout = () => {

    const[message,setMessage] = useState("Please wait...")

    const [reset, setReset] = useState(0)
    useEffect(()=>{
        setMessage(message);
        const timer = setTimeout(()=>{
        setMessage("Welcome to React!");
        },3000)
         return 
            clearTimeout(timer);
    },[])

    const handleRestart=()=>{

        setReset((p)=>p+1)
        setMessage("Please wait...");
    }
  return (
    <div>
        <h1>Using setTimeout</h1>
        
      <h3>{message}</h3>

      <button onClick = {handleRestart}>Restart</button>
    </div>
  );
}

export default Timeout
