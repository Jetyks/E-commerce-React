import { BrowserRouter as Router, useRoutes } from "react-router-dom";

/* import About from '../pages/About' */
/* import AddProduct from '../pages/AddProduct'; */
import Home from '../pages/Home';
/* import NotFound from '../pages/NotFound' */
import ProductDetails from '../pages/ProductDetails';

const Routes = () => {

    const routes = useRoutes([
        {
            path:"/",
            element: <Home/>
        },
       /*  {
            path:"new-product",
            element: <AddProduct/>
        }, */
        {
            //agregar /:id a la ruta
            path:"product-details/:id",
            element: <ProductDetails/>
        },
        /* {
            path:"about",
            element: <About/>
        }, */
        /* {
            path:"*",
            element: <NotFound/>
        }, */
    ]);

  return routes;
}

export default Routes