import "./index.css";
import Card from '../../components/Card'
import ListCard from '../../components/List Card'
import getProducts from "../../services/products";
import { useEffect, useState } from "react";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const newProducts = await getProducts(); 
    setProducts(newProducts);
    setLoading(false);
    /* console.log("new productsssss", newProducts); */
  }
  
  //UseEffect recibe dos parametros (funcion, condicion),
  // una funcion y una condicion []
  useEffect(() => {
    getData();
  }, []);
  

  return (

    <div className='home-container'>
      {
        loading 
        ? <h2 className="loading-text">Cargando...</h2>
        : <ListCard>
          {
            products.map((product) =>{
              return(
                <Card
                    key = {product.id}
                    productName = {product.product_name}
                    productPrice = {product.price}
                    productImage = {product.image}
                    productId = {product.id}
                    productDescription = {product.description}
                />
              )
            })
          }
        </ListCard>
      }
        
      
    </div>
    
  )
}

export default Home