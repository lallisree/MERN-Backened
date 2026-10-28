// import React, { useEffect, useState } from 'react'

import Practice from "./assets/components/Practice"

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

import Practice from "./assets/components/Practice"
const App = () => {
  return (
    <div>

<Practice/>
    </div>
  )
}

export default App

