import React from 'react'
import { useState } from 'react'

const ArrObjDel = () => {
 
  const [objarr,setObjArr] = useState([{username:"React",age:20},{username:"Node",age:22},{username:"JS",age:21}])

  const handleClick = ()=>{

    const copy = [...objarr,{username:"React to",age:48}]

    setObjArr(copy)

    // setObjArr((p)=>[...p,{username:"Node new",age:90}])

    // const copy = [...objarr]


    // copy.push({username:"Node new",age:90})

    // setObjArr(copy)

  }

  const handleupdate = (datas)=>{

    const copy = [...objarr]

    const updateValue = copy.map((e)=>e.username==="React"?{...e,username:"myname",age:787}:e)

    setObjArr(updateValue)

    // setObjArr((p)=>[...p].map((e)=>e.username===datas?{...e,username:"myname",age:787}:e))


  }


//   const deletHandleing = ()=>{

//     const copy = [...objarr] 

//     const deleteData = copy.filter((e,i)=>i!=2)

//     console.log(deleteData);
    

//     setObjArr(deleteData)

//   }

  return (
    <>
    <div>
      {objarr.map((e,i)=>(
        <div key={i+1}>
          <h2>{e.username}</h2>
          <p>{e.age}</p>
           <button onClick={()=>handleupdate(e.username)}>Update</button>
        </div>
      ))}

      <button onClick={handleClick}>Click to Add</button>
{/*      
      <button onClick={deletHandleing}>Delete</button> */}
    </div>
    </>
  )
}

export default ArrObjDel
