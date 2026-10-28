import React, { useEffect, useState } from "react";

const App = () => {
  const [productdata, setproductdata] = useState([]);
  const [input,setInput]=useState("")
  const[data,setdata]=useState([])

  const getfunc = async () => {
    const getdata = await fetch("https://dummyjson.com/products");
    const parsedata = await getdata.json();
    setproductdata(parsedata.products);
    setdata(parsedata.products);
  };

  const handlesearch=(e)=>{
    setInput(e.target.value)
    // console.log(input);
     const filterdata = productdata.filter((ele) =>ele.title.toLowerCase().includes(input.toLowerCase()));
    //  console.log(filterdata);
setdata(filterdata);
     
  }
  
  

 
  

  useEffect(() => {
    getfunc();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Products
      </h1>

      <input
        type="text"
        placeholder="search..."
        className="border mb-10"
        onChange={handlesearch}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((e, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <h1 className="text-lg font-semibold text-gray-800 mb-3">
              {e.title}
            </h1>

            <h1 className="text-2xl font-bold text-green-600">${e.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
