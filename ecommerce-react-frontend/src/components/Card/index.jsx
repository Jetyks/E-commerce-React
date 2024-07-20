import { Link } from "react-router-dom";
import "./index.css";

const Card = ({productName, productBrand, productPrice, productImage, productId, productDescription}) => {
 
  const routeMoreInfo = "product-details/" + productId;
   /* console.log(routeMoreInfo); */
  const placeHolderImage = "https://plus.unsplash.com/premium_photo-1681487929886-4c16ad2f2387?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  const handleImageError = (e) => {
    e.target.src = placeHolderImage
  }

  return (
    <div className="card-div">
      <Link
       to= {routeMoreInfo}
       state={{productName, productBrand, productPrice, productImage, productId, productDescription}}
       className="card-link" 
      >
        <div className="div-product-img">
          <img src={productImage || placeHolderImage} alt="product-img" onError={handleImageError} />
        </div>
        <div className="product-brand-container">
          <h5>{productBrand}</h5>
        </div>
        <div className="name-container-card">
          <h2>{productName}</h2>
        </div>
        <div className="price-container-card">
          <h2>${productPrice}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Card