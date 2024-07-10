import "./index.css";
import Card from '../../components/Card'
import ListCard from '../../components/List Card'
import NavBar from "../../components/NavBar";
import getProducts from "../../services/products";
import { useEffect, useState } from "react";

const Home = () => {

  const [products, setProducts] = useState([]);

  const getData = async () => {
    const newProducts = await getProducts(); 
    setProducts(newProducts);
    console.log("new productsssss", newProducts);
  }
  
  //UseEffect recibe dos parametros (funcion, condicion),
  // una funcion y una condicion []
  useEffect(() => {
    console.log("ejecutando useffect solo la primera vez []");
    getData();
  }, []);
  
  /* const [products, setProducts] = useState([]);
  const [params, setParams] = useState({});

  const getData = async (params) => {

    const newProducts = await getProducts(params);

    if (Array.isArray(newProducts) && newProducts.length >= 1) {
      setProducts(newProducts); */
      /* console.log("new characters",newCharacters); */
      
    /* } 
  } */

  /* const handleParams = ({productName, selectedCategory}) =>{
    const newParams = {characterName, selectedCategory};
    setParams (newParams);
 } */

  return (

    <div className='home-container'>
        <ListCard>
          {
            products.map((product, index) =>{
              return(
                <Card
                    key = {index}
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
      
    </div>
    
  )
}

export default Home