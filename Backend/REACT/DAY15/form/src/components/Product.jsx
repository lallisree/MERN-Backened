
import React, { useState } from 'react'

const Product = () => {
    const [product,setProduct] = useState({name:"",price:"",quantity:""})
    const [proAdd,setProAdd] = useState([])
    const [proEdit,setProEdit] = useState(null)

    const handleChange = (e) => {

        // setProduct(e.target.value)

          const { name, value } = e.target;

          setProduct((p) => ({ ...p, [name]: value }));

    }

    const handleAdd = () => {

        if(proEdit !== null){
        const copy = proAdd.map((p, i) =>i === proEdit ? { ...product } : p); //update

            setProAdd(copy);
            setProEdit(null);
             
        }else{

            setProAdd((p) => [...p, product]); //Add

        }
 
        setProduct({ name: "", price: "", quantity: "" });

    };



    const handleEdit = (i) => {

        setProduct((p) => ({ ...proAdd[i] }));

        setProEdit(i);

    }
  return (
    <div>
      <h2>Product Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter product name"
        value={product.name}
        onChange={handleChange}
      />
      <br /> <br />
      <input
        type="text"
        name="price"
        placeholder="Enter product price"
        value={product.price}
        onChange={handleChange}
      />
      <br /> <br />
      <input
        type="text"
        name="quantity"
        placeholder="Enter product quantity"
        value={product.quantity}
        onChange={handleChange}
      />
      <br /> <br />
      <button onClick={handleAdd}>
        {proEdit !== null ?"update product":"Add product"}</button>
      {proAdd.map((prod, i) => (
        <div key={i + 1}>
          <p>Name: {prod.name}</p>
          <p>Price: {prod.price}</p>
          <p>Quantity: {prod.quantity}</p>

          <button onClick={()=>handleEdit(i)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default Product
