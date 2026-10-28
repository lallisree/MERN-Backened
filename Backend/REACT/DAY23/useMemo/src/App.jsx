// import React, { useEffect, useState } from 'react'

import Multiply from "./assets/components/Multiply"


// const App = () => {
//   const [data,setData] = useState([])

//   const getfunc = async () => {
//     const getdata = await fetch("https://dummyjson.com/carts");
//     const parsedata = await getdata.json();
//     setData(parsedata.carts);
//   };

//   useEffect(()=>{
//     getfunc();
//   },[])
//   return (
//     <div>
//       {data.map((cart) => (
//         <h1 key={cart.id  }>
//           {cart.id}
//           {cart.total}
//         </h1>
//       ))}
//     </div>
//   );
// }

// export default App


const App = () => {
  return (
    <div>
      <Multiply/>
    </div>
  )
}

export default App

