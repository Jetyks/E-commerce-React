import "./index.css";
import logo from "../../assets/img/logo.png"
/* import SearchBar from '../SearchBar' */
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { getMeUserService } from "../../services/getUser";
import { useProductsContext } from "../../hooks/useProductsContext";

const NavBar = () => {

  const navigate = useNavigate();

  const { filterProducts, setFilteredProducts, products } = useProductsContext();
  const [searchTerm, setSearchTerm] = useState('');

  const [userData, setUserData] = useState({});
  const token = localStorage.getItem("token");

  useEffect(()=>{
    const fetchUserData = async () =>{
      try{
        const response = await getMeUserService(token)
        if(response.status === 200){
          setUserData(response.data)
          /* console.log("Data del usuario", userData) */
        }
      } catch (error){
        console.error("este es el error",error)
      }
    }
    fetchUserData()
  }, [token]);

  const { isLoggedIn, logout } = useAuthContext(); 

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/");
    filterProducts(searchTerm);
  };

  const handleLogoClick = () => {
    navigate("/"); // Navegar al inicio
    setFilteredProducts(products);
    console.log(products) // Restablecer los productos filtrados
  };

  return (
    <>
      <nav>
        <div className='general-div-container'>
            <div className="logo-container" onClick={handleLogoClick}>
              <img src={logo} alt="logo ecommerce" />
            </div>
            <form id='search-form' 
             className='form-element'
             onSubmit={handleSearch}>
                <div className='input-container'>
                  <input type="text" placeholder='Buscar Producto...' 
                  onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
            </form>
            <ul className='nav-items'>
                { ! isLoggedIn ? (
                <>
                  <li>
                    <Link to="log-in" className='nav-link'>
                        Log In
                    </Link>
                  </li>
                  <li>
                    <Link to="sign-up" className='nav-link'>
                        Sign Up
                    </Link>
                  </li>
                </>
                ) : (
                <div className="logged-nav">
                  <div className="div-name-user">
                    <h4>Bienvenido <label className="nav-user-name">{userData.first_name}</label></h4>
                    <div className="dropdown-menu">
                      <button onClick={logout}>Cerrar sesion</button>
                    </div>
                  </div>
                  <div className="div-shopping-car">
                    Carrito de compra
                  </div>
                </div>
                )
                  }
                {/* <Link to="/new-product" className='nav-link'>
                    Registro personaje
                </Link> */}
                {/* <Link to="/about" className='nav-link'>
                    Acerca de nosotros
                </Link> */}
            </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar