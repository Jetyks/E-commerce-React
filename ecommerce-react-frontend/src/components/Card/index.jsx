import { Link } from "react-router-dom";
import "./index.css";

const Card = ({productName, productPrice, productImage, productId, productDescription}) => {
 
  const routeMoreInfo = "product-details/" + productId;
   console.log(routeMoreInfo);

  return (
    <div className="card-div">
      <Link
       to= {routeMoreInfo}
       state={{productName, productPrice, productImage, productId, productDescription}}
       className="card-link" 
      >
        <div className="div-product-img">
          <img src={productImage} alt="product-img" />
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