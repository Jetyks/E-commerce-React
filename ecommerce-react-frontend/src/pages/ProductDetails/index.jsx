import "./index.css"
import React from 'react'
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {

  const location = useLocation();
  const { productName, productPrice, productImage, productDescription, gender } = location.state || {};

  return (
   
        <div className="main-div-container-pd">
        
          <div className="img-container-pd"> <img src={productImage} alt="Character image" /></div>
          <div className="info-product-pd">
            <div className="product-name-pd">
              <h1>{productName}</h1>
            </div>
            <div className="product-price">
              <h1>${productPrice}</h1>
            </div>
            <div className="product-description">
              <h4>Acerca del producto:</h4>
              <p>
                {productDescription}
              </p>
            </div>
            
          </div>
          <div className="buy-container">
              //disponible
              //agregar al carrito
          </div>

        </div>

  )
}

export default ProductDetails