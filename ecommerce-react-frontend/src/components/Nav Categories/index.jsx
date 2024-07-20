import { useNavigate } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { useProductsContext } from "../../hooks/useProductsContext";

const NavCategories = () => {
    
    const navigate = useNavigate();

    const { filterCategoryProducts } = useProductsContext();
    const [selectedCategory, setSelectedCategory] = useState("");


    const handleSearch = (event) => {
        event.preventDefault();
        if(selectedCategory){
           navigate("/");
           filterCategoryProducts(selectedCategory);
          /* console.log(selectedCategory); */
        }
       
      };

      const handleShowAll = () => {
        navigate('/');
        window.location.reload();
      };
    
  return (
    <div className="nav-container">
        <nav>
            <form className="category-form" onSubmit={handleSearch}>
                <button className="category-button" onClick={handleShowAll}>Todo</button>
                <button className="category-button" onClick={() => setSelectedCategory("Electronic")}>Electronica</button>
                <button className="category-button" onClick={() => setSelectedCategory("Games")}>Juegos</button>
                <button className="category-button" onClick={() => setSelectedCategory("Sports")}>Deportes</button>
                <button className="category-button" onClick={() => setSelectedCategory("Health")}>Salud</button>
                <button className="category-button" onClick={() => setSelectedCategory("Grocery")}>Comestibles</button>
                <button className="category-button" onClick={() => setSelectedCategory("Toys")}>Juguetes</button>
            </form>
        </nav>
    </div>
  )
}

export default NavCategories