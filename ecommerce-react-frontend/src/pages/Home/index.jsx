import "./index.css";
import Card from '../../components/Card'
import ListCard from '../../components/List Card'
import { useProductsContext } from "../../hooks/useProductsContext";

const Home = () => {
  const { filteredProducts, loading } = useProductsContext();

    return (
      <div className='home-container'>
        {loading ? (
          <h2 className="loading-text">Cargando...</h2>
        ) : (
          <ListCard>
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                productBrand={product.brand}
                productName={product.product_name}
                productPrice={product.price}
                productImage={product.image}
                productId={product.id}
                productDescription={product.description}
              />
            ))}
          </ListCard>
        )}
      </div>
    );
}

export default Home