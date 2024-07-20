import "./index.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from "../../hooks/useAuth"

const ProductDetails = () => {

  const placeHolderImage = "https://plus.unsplash.com/premium_photo-1681487929886-4c16ad2f2387?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const handleImageError = (e) => {
    e.target.src = placeHolderImage
  }
  
  const {isLoggedIn} = useAuthContext();
  const location = useLocation();
  const { productName, productPrice, productImage, productDescription } = location.state || {};
  
  const navigate = useNavigate();
  const handleButtonDisabled = () => {
    navigate("/log-in");
  };

  return (
   
        <div className="main-div-container-pd">
        
          <div className="img-container-pd"> <img src={productImage|| placeHolderImage} alt="Product image" onError={handleImageError} /></div>
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