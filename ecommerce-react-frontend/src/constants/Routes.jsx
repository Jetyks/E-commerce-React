import { useAuthContext } from "../hooks/useAuth";
import { Navigate, BrowserRouter as Router, useRoutes } from "react-router-dom";
/* import AddProduct from '../pages/AddProduct'; */
import Home from '../pages/Home';
/* import NotFound from '../pages/NotFound' */
import ProductDetails from '../pages/ProductDetails';
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddProducts from "../pages/AddProducts";

const Routes = () => {
    const { isLoading, isLoggedIn } = useAuthContext();

    const routes = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "add-products",
            element: isLoggedIn ? <AddProducts /> : <Navigate to="/log-in" />
        },
        {
            path: "product-details/:id",
            element: <ProductDetails />
        },
        {
            path: "log-in",
            element: <Login />
        },
        {
            path: "sign-up",
            element: <SignUp />
        },
        // Otras rutas...
    ]);

    if (isLoading) {
        return <div>Loading...</div>; // Mostrar un loader mientras se verifica el estado
    }

    return routes;
}

export default Routes