import "./index.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from "../../hooks/useAuth"

const ProductDetails = () => {

  const {isLoggedIn} = useAuthContext();
  const location = useLocation();
  const { productName, productPrice, productImage, productDescription } = location.state || {};
  
  const navigate = useNavigate();
  const handleButtonDisabled = () => {
    navigate("/log-in");
  };

  return (
   
        <div className="main-div-container-pd">
        
          <div className="img-container-pd"> <img src={productImage} alt="Product image" /></div>
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
          {isLoggedIn ?(
            <div className="buy-container">
              <button className="buy-button">Comprar</button>
            </div>
          ):(
            <div className="buy-container">
              <button className="buy-button-disabled" onClick={handleButtonDisabled}>Comprar</button>
            </div>
          )}
          

        </div>

  )
}

export default ProductDetails