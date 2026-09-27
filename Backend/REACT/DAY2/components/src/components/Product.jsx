import React from 'react'

const Product = () => {
  return (
    <div>
      <h2 className="heading">Our Products</h2>
      
      <div className="product-container">

      <div className="product-card">

        <img src="https://i.pinimg.com/736x/f9/f9/0a/f9f90af5ee442fd9456d0c8a2cd83645.jpg"/>
 
        <h3>Honey</h3>
        <p>$599</p>


      </div>

      
      <div className="product-card">

        <img src="https://i.pinimg.com/736x/08/c7/0d/08c70d473888e35bd1c4cd9d1d2983d7.jpg"/>
 
        <h3>vegiess</h3>
        <p>$299</p>

      </div>

      <div className="product-card">

        <img src="https://i.pinimg.com/1200x/f9/3e/17/f93e17b7a1f0d882c7f2e10b79aeca31.jpg"/>
 
        <h3>cucumber</h3>
        <p>$199</p>

      </div>


    </div>

    </div>
  )
}

export default Product
