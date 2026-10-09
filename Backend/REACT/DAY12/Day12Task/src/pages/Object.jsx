import React, { useState } from 'react'

const Object = () => {

    const [product, setProduct] = useState({
      name: "Laptop",
      price: 45000,
      stock: 10,
    });

    const updatePrice = () =>{
        setProduct({
            ...product,
            price:50000
    });
    }

  return (
    <>
      <div className="bg-pink-400 h-165">
        <div className="p-20 flex justify-center text-center gap-10">
          <h1>{product.name}</h1>
          <h1>{product.price}</h1>
          <h1>{product.stock}</h1>
        </div>
        <div>
          <button
            className="p-2 mx-auto block bg-pink-300 rounded-4xl"
            onClick={updatePrice}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default Object
