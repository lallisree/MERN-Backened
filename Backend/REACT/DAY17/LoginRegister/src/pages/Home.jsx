import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const [datas,setDatas] = useState({})
  const navigate = useNavigate()

  const getdata = () => {

    const takeData = JSON.parse(localStorage.getItem("isActiveuser")); 

    if (!takeData){

      alert("Please Login or Register")
      navigate("/login")
      return
    } 
     
    setDatas(takeData);

    

    }

    useEffect(()=>{

      getdata()
    },[])
  return (
    <div className="bg-amber-100 p-50 justify-center flex">
      <div>
    
        <h1>{datas.id}</h1>
        <h2>{datas.name}</h2>
        <h3>{datas.email}</h3>
      </div>
    </div>
  );
}

export default Home
