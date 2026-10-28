import React, { useState } from 'react'

const App = () => {

  const [data,setData] = useState([]);

  const getdata = async() => {
    const method = await fetch("https://dummyjson.com/products");
     const parsedata = await method.json();
     setData(parsedata.products);
  }
  return (
    <div>
      
    </div>
  )
}

export default App

