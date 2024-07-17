import { Navigate, BrowserRouter as Router, useRoutes } from "react-router-dom";
/* import AddProduct from '../pages/AddProduct'; */
import Home from '../pages/Home';
/* import NotFound from '../pages/NotFound' */
import ProductDetails from '../pages/ProductDetails';
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { useAuthContext } from "../hooks/useAuth";

const Routes = () => {

    /* const {isLoggedIn} = useAuthContext(); */

    const routes = useRoutes([
        {
            path:"/",
            element: <Home/>
        },
        /* {
            path:"new-product",
            element: isLoggedIn ? <AddProduct/> : <Navigate to="log-in"/>
        }, */
        {
            //agregar /:id a la ruta
            path:"product-details/:id",
            element: <ProductDetails/>
        },
        {
            path:"log-in",
            element: <Login/>
        },
        {
            path:"sign-up",
            element: <SignUp/>
        },
        /* {
            path:"*",
            element: <NotFound/>
        }, */
    ]);

  return routes;
}

export default Routes