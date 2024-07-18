import { createContext, useState, useEffect } from 'react';
import getProducts from '../services/products'; // Función que obtiene los productos de la API

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filterProducts = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => 
          product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };
  

  return (
    <ProductsContext.Provider value={{ products, filteredProducts, setFilteredProducts, filterProducts, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};



export { ProductsContext, ProductsProvider };