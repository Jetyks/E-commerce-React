import "./caca.css";
import React from 'react'
import logo from "../../assets/img/logo.png"
/* import SearchBar from '../SearchBar' */
import { Link } from "react-router-dom";

const NavBar = ({ handleParams }) => {

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
                <img src={logo} alt="logo ecommerce" className='logo-img' />
            </div>
            <div className='input-container'>
              <input type="text" />
            </div>
            <ul className='nav-items'>
                {/* <Link to="/" className='nav-link'>
                    Inicio
                </Link> */}
                <Link to="/" className='nav-link'>
                    Log In
                </Link>
                <Link to="/" className='nav-link'>
                    Sign Up
                </Link>
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