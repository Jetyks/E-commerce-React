import "./index.css";
import logo from "../../assets/img/logo.png"
/* import SearchBar from '../SearchBar' */
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuth";

const NavBar = ({ handleParams }) => {

  const { isLoggedIn, login, logout } = useAuthContext(); 

  const handleForm = (event) => {
    event.preventDefault();
    

    const formElement = event.target;
    const formData = new FormData(formElement);

    const productName = formData.get('product-name');

        handleParams({ productName });

  };

  return (
    <>
      <nav>
        <form id='search-form' className='form-element' onSubmit={handleForm}>
            <div className= "logo-container">
              <Link to="/">
                <img src={logo} alt="logo ecommerce" className='logo-img' />
              </Link>
            </div>
            <div className='input-container'>
              <input type="text" />
            </div>
            <ul className='nav-items'>
                {/* <Link to="/" className='nav-link'>
                    Inicio
                </Link> */}

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
                    <h4>Bienvenido Enrique</h4>
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
        </form>
      </nav>
    </>
  )
}

export default NavBar