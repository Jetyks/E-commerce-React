import  {useRoutes} from "react-router-dom";

/* import About from '../pages/About' */
/* import AddCharacter from '../pages/AddCharacter' */
import Home from '../pages/Home'
/* import NotFound from '../pages/NotFound' */
import ProductDetails from '../pages/ProductDetails'

const Routes = () => {

    const routes = useRoutes([
        {
            path:"/",
            element: <Home/>
        },
        /* {
            path:"new-character",
            element: <AddCharacter/>
        }, */
        {
            path:"product-details",
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