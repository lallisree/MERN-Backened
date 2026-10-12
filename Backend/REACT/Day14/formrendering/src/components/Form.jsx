// import React, { useState } from 'react'

// const Form = () => {

// const [datas,setDatas] = useState("")

//   const handleChange = (e) => {

//     const value = e.target.value;

//     setDatas(value);

//     // console.log(e.target.value);

//     if (value === "") {
//       alert("Please enter");
//       return;
//     }

//     if (value % 2 === 0) {
//       alert("Even no");
//     } else {
//       alert("Odd no");
//     }
    
     
//   }

//   return (
//     <>

//       <h1>{datas}</h1>

//       <input type="text" onChange={handleChange} />

//     </>
//   );
// }

// export default Form


import React, { useState } from "react";

const Form = () => {

  const [datas, setDatas] = useState("");
  const [saveData,setSaveData] = useState([]);

  const handleChange = (e) => {

    const value = e.target.value;

    setDatas(value);

  };

  const handleClick = () => {
    //1

    const copy = [...saveData,datas]

    setDatas("")

    setSaveData(copy)

    //  

    //2

    // const copy = [...saveData]

    // copy.push("i088")

    // setSaveData(copy)

    //3

    // setSaveData((p)=>[...p,"456745"])


    

  //   if(datas % 2 === 0){
  //     alert("Even no")
  //   }else{
  //     alert("Odd no")
  //   }


  };

  const handleEdit = (data) => {

    setDatas(data)

  };

  const handleDelete = (datanew) => {

    const copy = [...saveData]

    const deletedata = copy.filter((e,i)=>i!=datanew)

    setSaveData(deletedata)


  }

  return (
    <>
      {/* <h1>{saveData}</h1> */}
      {/* <div>
        {saveData.map((e,i)=>(
          <h2 key = {i+1}>{e}</h2>
        ))}
      </div> */}

      <input type="text" value={datas} onChange={handleChange} />
      <button onClick={handleClick}>Add Task</button>

      {saveData.map((e, i) => (
        <div key={i + 1}>
          <h2>{i + 1}</h2>
          <p>{e}</p>
          <button onClick = {()=>handleEdit(e)}>Edit</button>
          <button onClick = {()=>handleDelete(i)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Form;
